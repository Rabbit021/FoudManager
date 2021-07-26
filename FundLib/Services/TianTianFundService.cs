using System;
using System.Collections.Generic;
using FundLib.Interface;
using FundLib.Model;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FundLib.Extensions;
using FundLib.Model.TianTian;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace FundLib.Services
{
    public class TianTianFundService : IFundFindService
    {
        private IMapper mapper;
        public TianTianFundService()
        {
            mapper = PublicDatas.Resolve<IMapper>();
        }
        public IEnumerable<FundDetail> GetFundDetailList(IEnumerable<string> codes)
        {
            var taskList = codes.Select(code => Task.Run(() => GetFundDetail(code)));
            Task.WaitAll(taskList.ToArray());
            var lst = taskList.Select(x => x.Result);
            return lst;
        }

        public FundDetail GetFundDetail(string code)
        {
            var detail = new FundDetail();
            var baseInfo = GetFundMNDetailInformation(code);
            var postSummary = GetFundMNAssetAllocationNew(code);
            var postion = GetFundMNInverstPosition(code); // 个股持仓
            var sector = GetFundMNSectorAllocation(code); // 行业持仓


            // 基础数据
            detail.code = code;
            detail.name = baseInfo.shortname;
            detail.ftype = baseInfo.ftype;
            detail.assets = Math.Round((double)postSummary.nav, 2);
            detail.stockPercent = postSummary.stockPercent;
            detail.bondPercent = postSummary.bondPercent;
            detail.cashPercent = postSummary.cashPercent;
            detail.otherPercent = postSummary.otherPercent;

            // TODO 需要注意ETF链接基金持股计算
            // 持仓数据
            detail.Top10 = postion.fundStocks.Select(x => mapper.Map<FundTop10>(x));
            detail.BondTop10 = postion.fundboods.Select(x => mapper.Map<FundTop10>(x)); ;
            // 行业数据
            return detail;
        }

        #region 天天基金App数据接口 Get

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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public List<FundMNShareScaleList> GetFundMNShareScaleList(string code)
        {
            var fun = "/FundMNewApi/FundMNShareScaleList";
            var rst = GetTiantianDatas<List<FundMNShareScaleList>>(fun, code);
            return rst;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public List<FundMNAssetsList> GetFundMNAssetsList(string code)
        {
            var fun = "/FundMNewApi/FundMNAssetsList";
            var rst = GetTiantianDatas<List<FundMNAssetsList>>(fun, code);
            return rst;
        }

        public List<FundMNPeriodIncrease> GetFundMNPeriodIncrease(string code)
        {
            var fun = "/FundMNewApi/FundMNPeriodIncrease";
            var rst = GetTiantianDatas<List<FundMNPeriodIncrease>>(fun, code);
            return rst;
        }

        #endregion

        #region 天天基金App数据接口 Post

        public FundMNUniqueInfo PostFundMNUniqueInfo(string code)
        {
            var fun = "/FundMNewApi/FundMNUniqueInfo";
            var rst = PostTiantianDatas<FundMNUniqueInfo>(fun, code);
            return rst;
        }

        #endregion

        #region 基础方法

        private T PostTiantianDatas<T>(string path, string code)
        {
            var fundapi = "https://fundmobapi.eastmoney.com";

            var dict = GetQueryParamDict();
            dict["FCODE"] = code;
            var url = $"{fundapi}{path}";
            var json = WebManager.Post(url, dict);
            var rst = json.As<T>("Datas");
            return rst;
        }

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
            var fundapi = "https://fundmobapi.eastmoney.com";
            var dict = GetQueryParamDict(query);
            var queryString = string.Join('&', dict.Select(x => $"{x.Key}={x.Value}"));
            var url = $"{fundapi}{path}?{queryString}";
            return url;
        }

        /// <summary>
        /// 获取查询字符串地址
        /// </summary>
        /// <returns></returns>
        private Dictionary<string, string> GetQueryParamDict(IDictionary<string, string> query = null)
        {
            var dict = PublicDatas.Resolve<Dictionary<string, string>>("TianTianParam");
            query ??= new Dictionary<string, string>();
            foreach (var itr in query)
                dict[itr.Key] = itr.Value;
            return dict;
        }
        #endregion
    }
}