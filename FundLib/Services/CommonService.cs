using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Reflection;
using EPPlus.Core.Extensions;
using FundLib.Extensions;
using FundLib.Interface;
using FundLib.Model;
using FundLib.Model.DataBaseModel;
using Microsoft.AspNetCore.Http;
using OfficeOpenXml;

namespace FundLib.Services
{
    public class CommonService
    {
        private readonly IFundFindService _fundFind;
        private readonly IPrcessData _prcessData;
        private RepositoryService _repositoryService;

        public CommonService(IFundFindService fundService, IPrcessData prcessData, RepositoryService repositoryService)
        {
            _fundFind = fundService;
            _prcessData = prcessData;
            _repositoryService = repositoryService;
        }

        public List<FundDetail> GetFundList([NotNull] IEnumerable<string> codes)
        {
            codes = codes.Distinct();
            var lst = new List<FundDetail>();
            if (codes.Any())
            {
                lst = _fundFind.GetFundDetailList(codes).OrderBy(x => x.ftype).ThenBy(x => x.assets).ToList();
            }

            return lst;
        }

        /// <summary>
        /// 从excel中读取基金代码
        /// </summary>
        /// <param name="formFile"></param>
        public IEnumerable<FundDetail> ReadCodes(IFormFile formFile)
        {
            var lst = new List<FundDetail>();
            using (var stream = formFile.OpenReadStream())
            {
                using (var package = new ExcelPackage(stream))
                {
                    var workSheet = package.GetWorksheet(0);
                    var rows = workSheet.Dimension.Rows;
                    var startRow = 2;
                    for (int i = startRow; i < rows; i++)
                    {
                        var detail = new FundDetail();
                        var code = workSheet.Cells[i, 1].Value.ToString();
                        var monery = workSheet.Cells[i, 2]?.Value?.ToString();
                        detail.code = code;
                        if (double.TryParse(monery, out var data))
                            detail.monery = data;
                        lst.Add(detail);
                    }
                }
                return lst.DistinctBy(x => x.code);
            }
        }

        public byte[] AsExcel(List<FundDetail> lst)
        {
            using (var mem = new MemoryStream())
            {
                using (var package = new ExcelPackage(mem))
                {
                    var propDict = new Dictionary<ColumnAttribute, PropertyInfo>();
                    var type = typeof(FundDetail);
                    var perperties = type.GetProperties();

                    var col = 1;
                    foreach (var propertyInfo in perperties)
                    {
                        var display = propertyInfo.GetCustomAttribute<ColumnAttribute>();
                        if (display == null) continue;
                        display.Column = col;
                        propDict[display] = propertyInfo;
                        col++;
                    }
                    var worksheet = package.Workbook.Worksheets.Add("Sheet0");

                    // 表头
                    foreach (var itr in propDict)
                    {
                        var header = itr.Key;
                        worksheet.Cells[1, header.Column].Value = header.DisplayName;
                    }

                    // 第二行
                    var row = 2;
                    for (int i = 2; i < lst.Count; i++)
                    {
                        var item = lst[i - 2];
                        foreach (var itr in propDict)
                        {
                            var header = itr.Key;
                            var data = itr.Value.GetValue(item);
                            worksheet.Cells[row, header.Column].Value = data;
                        }

                        // 更新行索引
                        row++;
                    }

                    row += 3;

                    // 统计数据
                    var summary = _prcessData.Process(lst);
                    foreach (var itr in summary.StockItems)
                    {
                        worksheet.Cells[row, 1].Value = itr.Code;
                        worksheet.Cells[row, 2].Value = itr.Name;
                        row++;
                    }

                    package.Save();
                }
                var datas = mem.ToArray();
                return datas;
            }
        }

        #region 持仓管理
        /// <summary>
        /// 加载基金
        /// </summary>
        /// <returns></returns>
        public List<FundDetail> LoadFunds()
        {
            var codes = _repositoryService.GetFundList();
            return codes;
        }

        /// <summary>
        /// 更新基金数据
        /// </summary>
        /// <returns></returns>
        public void RefreshFunds()
        {
            var codes = LoadFunds().Select(x => x.code).ToList();
            SaveFund(codes);
        }

        /// <summary>
        /// 添加活更新持仓
        /// </summary>
        public void SaveFund(IEnumerable<string> codes)
        {
            var fundList = GetFundList(codes);
            _repositoryService.Save(fundList);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="code"></param>
        public void DeleteFund(IEnumerable<string> codes)
        {

        }
        #endregion
    }
}
