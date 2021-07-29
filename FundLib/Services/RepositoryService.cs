using System;
using System.Collections.Generic;
using System.Linq;
using FundLib.Model;
using FundLib.Model.DataBaseModel;
using Microsoft.EntityFrameworkCore;

namespace FundLib.Services
{
    /// <summary>
    /// 数据存储服务服务
    /// </summary>
    public class RepositoryService
    {
        private readonly IDbContextFactory<FundDbContext> dbContextFactory;
        public RepositoryService(IDbContextFactory<FundDbContext> dbContextFactory)
        {
            this.dbContextFactory = dbContextFactory;
        }

        public void Save(List<FundDetail> toList)
        {
            using (var context = dbContextFactory.CreateDbContext())
            {
                foreach (var itr in toList)
                {
                    var exist = context.FundDetails.Any(x => x.code == itr.code);
                    if (exist)
                        context.FundDetails.Update(itr);
                    else
                        context.FundDetails.Add(itr);
                }
                context.SaveChanges();
            }
        }

        public List<FundDetail> GetFundList()
        {
            using (var context = dbContextFactory.CreateDbContext())
            {
                return context.FundDetails.ToList();
            }
        }
    }
}