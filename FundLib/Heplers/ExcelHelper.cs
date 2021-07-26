using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using EPPlus.Core.Extensions;
using OfficeOpenXml;
using OfficeOpenXml.Table;

namespace FundLib.Heplers
{
    public class ExcelHelper
    {
        /// <summary>
        /// 读取excel配置,需要使用注解[ExcelTableColumn(5)]
        /// </summary>
        /// <typeparam name="TSource"></typeparam>
        /// <param name="filename"></param>
        /// <returns></returns>
        public static List<TSource> ReadFromExcel<TSource>(string filename) where TSource : class, new()
        {
            var fileInfo = new FileInfo(filename);
            if (!fileInfo.Exists)
                throw new FileNotFoundException(filename);
            using (var package = new ExcelPackage(fileInfo))
            {
                var maps = package.GetWorksheet(0).ToList<TSource>();
                return maps;
            }
        }

        /// <summary>
        /// 保存数据列表到Excel（泛型）
        /// </summary>
        /// <typeparam name="T">集合数据类型</typeparam>
        /// <param name="data">数据列表</param>
        /// <param name="FileName">Excel文件</param>
        /// <param name="OpenPassword">Excel打开密码</param>
        public static void SaveToExcel<T>(IEnumerable<T> data, string FileName, string OpenPassword = "")
        {
            var file = new FileInfo(FileName);
            try
            {
                using (var ep = new ExcelPackage(file, OpenPassword))
                {
                    var ws = ep.Workbook.Worksheets.Add(typeof(T).Name);
                    ws.Cells["A1"].LoadFromCollection(data, true, TableStyles.Medium10);
                    ep.Save(OpenPassword);
                }
            }
            catch (InvalidOperationException ex)
            {
            }
        }
    }
}