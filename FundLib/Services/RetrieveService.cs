using System.Collections.Generic;
using System.Linq;
using System.Threading;
using AutoMapper;
using FundLib.Interface;
using FundLib.Model.DataBaseModel;

namespace FundLib.Services
{
    /// <summary>
    /// 基金数据检索和存储
    /// </summary>
    public class RetrieveService
    {
        private readonly IFundFindService fundFindService;
        private readonly FundDbContext _fundDbContext;
        private readonly IMapper mapper;
        private RepositoryService repositoryService;

        public RetrieveService(IFundFindService fundFindService, RepositoryService repositoryService, FundDbContext fundDbContext, IMapper mapper)
        {
            this.fundFindService = fundFindService;
            this.repositoryService = repositoryService;
            _fundDbContext = fundDbContext;
            this.mapper = mapper;
        }


        /// <summary>
        /// 检索和更新同步数据
        /// </summary>
        /// <param name="code"></param>
        public void Retrieve()
        {
            var codes = repositoryService.GetDbContext().GetList<FundPosition>().Select(x => x.fcode).ToList();

            foreach (var code in codes)
            {
                var info = fundFindService.GetFundInfo(code);
                repositoryService.Save(info);

                // 持仓信息
                var items = info.FundStocks;
                var lst = new List<StockItem>();
                foreach (var itr in items)
                {
                    if (itr == null) continue;
                    var item = new StockItem();
                    item.fcode = info.fcode;
                    item.name = itr.Name;
                    item.scode = itr.Code;
                    item.percent = itr.Percent;
                    lst.Add(item);
                }
                _fundDbContext.AsDeleteable<StockItem>().Where(x => x.fcode == code).ExecuteCommand();
                _fundDbContext.InsertRange(lst);
            }
        }

        public void RetrievePrice()
        {
            var funds = repositoryService.GetDbContext().GetList<FundPosition>();
            foreach (var fund in funds)
            {
                var info = fundFindService.PostFundMNFInfo(fund.fcode);
                var data = mapper.Map<FundPrice>(info);
                repositoryService.SavePrice(data);

                // 更新持仓
                fund.fund_size = data.price * fund.fund_share;
                fund.fund_size_tmp = data.price_tmp * fund.fund_share;
                _fundDbContext.Save(new[] { fund });
            }
        }
    }
}