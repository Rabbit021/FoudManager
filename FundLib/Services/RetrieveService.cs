using System.Collections.Generic;
using System.Linq;
using FundLib.Extensions;
using FundLib.Interface;
using FundLib.Model.TianTian;

namespace FundLib.Services
{
    /// <summary>
    /// 基金数据检索和存储
    /// </summary>
    public class RetrieveService
    {
        private readonly IFundFindService fundFindService;
        private RepositoryService repositoryService;

        public RetrieveService(IFundFindService fundFindService, RepositoryService repositoryService)
        {
            this.fundFindService = fundFindService;
            this.repositoryService = repositoryService;
        }

        /// <summary>
        /// 检索和更新同步数据
        /// </summary>
        /// <param name="code"></param>
        public void Retrieve(string code)
        {

        }
    }
}