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

        public DbContextBase GetDbContext()
        {
            return _fundDbContext;
        }

        #region 基础数据表

        #endregion

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

        public void Save(FundInfo fundInfo)
        {
            var item = mapper.Map<FundItem>(fundInfo);
            _fundDbContext.Save(new[] { item });
        }
    }
}