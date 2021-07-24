using System.Collections.Generic;
using FundLib.Interface;
using FundLib.Model;
using System.Linq;
using FundLib.Extensions;
using FundLib.Model.TianTian;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace FundLib.Services
{
    public class TianTianFundService : IFundFindService
    {
        public IEnumerable<FundDetail> GetFundDetailList(IEnumerable<string> codes)
        {
            foreach (var itr in codes)
                GetFundDetail(itr);
            return null;
        }

        private FundDetail GetFundDetail(string code)
        {
            GetFundMNDetailInformation(code);
            return null;
        }

        #region 天天基金App数据接口

        /// <summary>
        /// 获取基金概况
        /// </summary>
        public FundMNDetailInformation GetFundMNDetailInformation(string code)
        {
            var fun = "/FundMNewApi/FundMNDetailInformation";
            var rst = GetTiantianDatas<FundMNDetailInformation>(fun, code);
            return rst;
        }

        /// <summary>
        /// 最新持仓的比例
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public FundMNAssetAllocationNew GetFundMNAssetAllocationNew(string code)
        {
            var fun = "/FundMNewApi/FundMNAssetAllocationNew";
            var rst = GetTiantianDatas<List<FundMNAssetAllocationNew>>(fun, code);
            return rst.FirstOrDefault();
        }

        /// <summary>
        /// 最新持仓
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public FundMNInverstPosition GetFundMNInverstPosition(string code)
        {
            var fun = "/FundMNewApi/FundMNInverstPosition";
            var rst = GetTiantianDatas<FundMNInverstPosition>(fun, code);
            if (rst.etfcode != null)
            {
                // ETF 重仓替换
                var etf = GetFundMNInverstPosition(rst.etfcode);
            }
            return rst;
        }

        /// <summary>
        /// 行业比例
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public List<FundMNSectorAllocation> GetFundMNSectorAllocation(string code)
        {
            var fun = "/FundMNewApi/FundMNSectorAllocation";
            var rst = GetTiantianDatas<List<FundMNSectorAllocation>>(fun, code);
            return rst;
        }

        public List<FundMNShareScaleList> GetFundMNShareScaleList(string code)
        {
            var fun = "/FundMNewApi/FundMNShareScaleList";
            var rst = GetTiantianDatas<List<FundMNShareScaleList>>(fun, code);
            return rst;
        } 

        public List<FundMNAssetsList> GetFundMNAssetsList(string code)
        {
            var fun = "/FundMNewApi/FundMNAssetsList";
            var rst = GetTiantianDatas<List<FundMNAssetsList>>(fun, code);
            return rst;
        }

        public FundMNPeriodIncrease GetFundMNPeriodIncrease(string code)
        {

        }

        #endregion

        #region 基础方法
        private T GetTiantianDatas<T>(string path, string code)
        {
            var query = new Dictionary<string, string>();
            query["FCODE"] = code;
            var url = GetUrl(path, query);
            var json = WebManager.Get(url);
            var rst = json.As<T>("Datas");
            return rst;
        }
        /// <summary>
        /// 获取请求路径
        /// </summary>
        /// <param name="path"></param>
        /// <param name="query"></param>
        /// <returns></returns>
        private string GetUrl(string path, IDictionary<string, string> query = null)
        {
            var fundapi = "https://fundmobapi.eastmoney.com/";
            var url = $"{fundapi}{path}?{GetQueryParamDict(query)}";
            return url;
        }

        /// <summary>
        /// 获取查询字符串地址
        /// </summary>
        /// <returns></returns>
        private string GetQueryParamDict(IDictionary<string, string> query = null)
        {
            var dict = PublicDatas.Resolve<Dictionary<string, string>>("TianTianParam");
            query ??= new Dictionary<string, string>();
            foreach (var itr in query)
                dict[itr.Key] = itr.Value;
            var queryString = string.Join('&', dict.Select(x => $"{x.Key}={x.Value}"));
            return queryString;
        }
        #endregion
    }
}