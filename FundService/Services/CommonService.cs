using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reflection;
using EPPlus.Core.Extensions;
using FundLib.Extensions;
using FundLib.Interface;
using FundLib.Model;
using Microsoft.AspNetCore.Http;
using OfficeOpenXml;

namespace FundService.Services
{
    public class CommonService
    {
        private readonly IFundFindService _fundFind;
        public CommonService(IFundFindService fundService)
        {
            _fundFind = fundService;
        }

        public List<FundDetail> GetFundList(IEnumerable<string> codes)
        {
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
                    package.Save();
                }
                var datas = mem.ToArray();
                return datas;
            }
        }
    }
}
