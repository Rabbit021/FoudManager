using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FundLib.Model;
using FundLib.Model.DataBaseModel;
using SqlSugar;
using FundInfo = FundLib.Model.DataBaseModel.FundInfo;

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

        public void Save(Model.FundInfo fundInfo)
        {
            var item = mapper.Map<FundInfo>(fundInfo);
            _fundDbContext.Save(new[] { item });
        }
    }
}