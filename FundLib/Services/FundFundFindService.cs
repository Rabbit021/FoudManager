using System;
using System.Collections.Generic;
using System.Linq;
using FundLib.Interface;
using FundLib.Model;
using HtmlAgilityPack;
using Jint;
using Newtonsoft.Json.Linq;

namespace FundLib.Services
{
    /// <summary>
    /// 天天获取基金详情
    /// </summary>
    public class FundFundFindService : IFundFindService
    {
        private Dictionary<FundType, int> PercentDict = new Dictionary<FundType, int>()
        {
            {FundType.jjcc,6 },
            {FundType.zqcc,3 }
        };

        public IEnumerable<FundDetail> GetFundDetailList(IEnumerable<string> codes)
        {
            var lst = codes.AsParallel().Select(x => GetFundDetail(x));
            return lst;
        }

        private FundDetail GetFundDetail(string code)
        {
            var url = $"http://fund.eastmoney.com/pingzhongdata/{code}.js";
            var content = WebManager.Get(url);
            var engine = new Engine();
            engine.Execute(content);

            var name = engine.GetValue("fS_name").AsString();
            // 资产配置持仓
            var asset = JObject.FromObject(engine.GetValue("Data_assetAllocation").ToObject());
            var detail = new FundDetail();
            // 时间
            var categories = asset.SelectToken("categories") as JArray ?? new JArray();
            var last = categories.Count - 1;
            var lastTime = categories[last] + "";

            // 比例
            var stock = (double)asset.SelectToken($"series[0].data[{last}]");
            var bond = (double)asset.SelectToken($"series[1].data[{last}]");
            var cash = (double)asset.SelectToken($"series[2].data[{last}]");

            // 申购赎回
            asset = JObject.FromObject(engine.GetValue("Data_buySedemption").ToObject());
            // 资产
            var assets = (double)asset.SelectToken($"series[2].data[{last}]");

            detail.lastTime = lastTime;
            detail.code = code;
            detail.name = name;
            detail.assets = assets;

            detail.stockPercent = stock;
            detail.bondPercent = bond;
            detail.cashPercent = cash;
            // top10持仓
            detail.Top10 = GetTop10(code, FundType.jjcc);
            detail.BondTop10 = GetTop10(code, FundType.zqcc);

            return detail;
        }

        /// <summary>
        /// </summary>
        /// <param name="code"></param>
        /// <param name="type">zqcc 债券,jjcc 股票</param>
        /// <returns></returns>
        private IEnumerable<FundTop10> GetTop10(string code, FundType type)
        {
            var baseUrl = "https://fundf10.eastmoney.com/FundArchivesDatas.aspx";

            var dict = new Dictionary<string, string>();
            dict["code"] = code;
            dict["type"] = type + "";
            dict["year"] = "";
            dict["topline"] = "100";
            dict["rt"] = $"0.{DateTime.Now.Ticks}";

            var queryString = string.Join("&", dict.Select(x => $"{x.Key}={x.Value}"));
            var url = $"{baseUrl}?{queryString}";
            var web = new HtmlWeb();
            var document = web.Load(url);
            var tables = document.DocumentNode.SelectNodes("//table");
            if (tables == null) return new List<FundTop10>();
            var table = tables.FirstOrDefault();
            var tbody = table.SelectNodes("//tbody").FirstOrDefault();
            var trList = tbody.ChildNodes;

            var lst = new List<FundTop10>();

            PercentDict.TryGetValue(type, out var index);
            foreach (var tr in trList)
            {
                var tds = tr.ChildNodes;
                var top = new FundTop10();
                top.Code = tds[1].InnerText;
                top.Name = tds[2].InnerText;
                top.Percent = double.Parse(tds[index].InnerText.Replace("%", ""));
                lst.Add(top);
            }
            return lst;
        }
    }

    public enum FundType
    {
        zqcc,
        jjcc
    }
}
