using System.Collections.Generic;
using System.Linq;
using FundManager.Interface;
using FundManager.Model;
using HtmlAgilityPack;
using Jint;
using Newtonsoft.Json.Linq;

namespace FundManager.Services
{
    public class FundService :IFindService
    {
        public FundDetail GetFundDetail(string code)
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
            var categories = asset.SelectToken("categories") as JArray;
            var lastTime = categories.LastOrDefault().ToObject<string>();
            // 比例
            var series = asset.SelectToken("series") as JArray;
            var stock = series[0].SelectToken("data").LastOrDefault().ToObject<double>();
            var bond = series[1].SelectToken("data").LastOrDefault().ToObject<double>();
            var cash = series[2].SelectToken("data").LastOrDefault().ToObject<double>();

            detail.lastTime = lastTime;
            detail.code = code;
            detail.name = name;
            detail.stockPercent = stock;
            detail.bondPercent = bond;
            detail.cashPercent = cash;
            // top10持仓
            detail.Top10 = GetTop10(code);

            return detail;
        }

        private IEnumerable<FundTop10> GetTop10(string code)
        {
            //    https://fundf10.eastmoney.com/FundArchivesDatas.aspx?type=zqcc&code=165808&year=&rt=0.22589432610855598
            var address = "http://fundf10.eastmoney.com/FundArchivesDatas.aspx?type=jjcc&topline=10&year=&month=";
            var url = $"{address}&code={code}";
            var web = new HtmlWeb();
            var document = web.Load(url);
            var table = document.DocumentNode.SelectNodes("//table").FirstOrDefault();
            var tbody = table.SelectNodes("//tbody").FirstOrDefault();
            var trList = tbody.ChildNodes;

            var lst = new List<FundTop10>();
            foreach (var tr in trList)
            {
                var tds = tr.ChildNodes;
                var top = new FundTop10();

                top.Code = tds[1].InnerText;
                top.Name = tds[2].InnerText;
                top.Percent = double.Parse(tds[6].InnerText.Replace("%", ""));
                lst.Add(top);
            }
            return lst;
        }
    }
}
