using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FundLib.Model;
using FundLib.Model.DataBaseModel;
using SqlSugar;

namespace FundLib.Services
{
    /// <summary>
    /// 数据存储服务服务
    /// </summary>
    public class RepositoryService
    {
        private readonly FundDbContext _fundDbContext;
        private readonly IMapper mapper;

        public RepositoryService(FundDbContext fundDbContext, IMapper mapper)
        {
            _fundDbContext = fundDbContext;
            this.mapper = mapper;
            _fundDbContext.Initlize();
        }

        public void Save(List<FundInfo> datas)
        {
            var items = mapper.Map<List<FundItem>>(datas);

            var stockItems = new List<StockItem>();
            var bondItems = new List<BondItem>();
            foreach (var itr in datas)
            {
                var lst = mapper.Map<List<StockItem>>(itr.FundStocks);
                lst.ForEach(x =>
                {
                    x.fcode = itr.code;
                });
                stockItems.AddRange(lst);

                var lst2 = mapper.Map<List<BondItem>>(itr.FundBoods);
                lst2.ForEach(x =>
                {
                    x.fcode = itr.code;
                });
                bondItems.AddRange(lst2);
            }

            _fundDbContext.Save(items);

            var scodes = (stockItems.Select(x => x.fcode).ToArray());
            var bcodes = (bondItems.Select(x => x.fcode).ToArray());

            _fundDbContext.AsDeleteable<StockItem>().Where(x => SqlFunc.ContainsArray(scodes, x.fcode)).ExecuteCommand();
            _fundDbContext.InsertRange(stockItems);

            _fundDbContext.AsDeleteable<BondItem>().Where(x => SqlFunc.ContainsArray(bcodes, x.fcode)).ExecuteCommand();
            _fundDbContext.InsertRange(bondItems);
        }

        public List<FundInfo> GetFundList()
        {
            var items = _fundDbContext.GetList<FundItem>();
            var details = mapper.Map<List<FundInfo>>(items);

            foreach (var itr in details)
            {
                itr.FundStocks = mapper.Map<List<PercenItem>>(_fundDbContext.GetList<StockItem>());
            }
            return details;
        }

        public List<StockItem> GetStockItems()
        {
            var lst = _fundDbContext.GetList<StockItem>();
            return lst;
        }

        public void GetSummary()
        {
            _fundDbContext.GetList<StockItem>();
        }
    }
}