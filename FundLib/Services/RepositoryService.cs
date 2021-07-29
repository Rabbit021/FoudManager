using System;
using System.Collections.Generic;
using System.Linq;
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
        public void Save(List<FundItem> toList)
        {
            using (var context = dbContextFactory.CreateDbContext())
            {
                foreach (var itr in toList)
                    context.Add(itr);
                context.SaveChanges();
            }
        }
    }
}