using System;
using System.Collections.Generic;
using System.Linq;
using FundLib.Model;
using FundLib.Model.DataBaseModel;

namespace FundLib.Services
{
    /// <summary>
    /// 数据存储服务服务
    /// </summary>
    public class RepositoryService
    {
        private readonly FundDbContext _fundDbContext;

        public RepositoryService(FundDbContext fundDbContext)
        {
            _fundDbContext = fundDbContext;
            _fundDbContext.Initlize();
        }

        public void Save(List<FundDetail> datas)
        {
            _fundDbContext.Save(datas);
        }

        public List<FundDetail> GetFundList()
        {
            return _fundDbContext.GetList<FundDetail>() ?? new List<FundDetail>();
        }
    }

}