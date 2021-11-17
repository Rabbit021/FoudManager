using System.Collections.Generic;
using System.Linq;
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

        private RepositoryService repositoryService;

        public RetrieveService(IFundFindService fundFindService, RepositoryService repositoryService, FundDbContext fundDbContext)
        {
            this.fundFindService = fundFindService;
            this.repositoryService = repositoryService;
            _fundDbContext = fundDbContext;
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
    }
}