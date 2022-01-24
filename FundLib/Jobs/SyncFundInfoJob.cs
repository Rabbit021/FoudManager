using System;
using System.Threading.Tasks;
using FundLib.Services;
using Quartz;

namespace FundLib.Jobs
{
    /// <summary>
    /// 同步基金的基本信息
    /// </summary>
    [DisallowConcurrentExecution]
    public class SyncFundInfoJob : IJob
    {
        private readonly RetrieveService _retrieveService;
        public SyncFundInfoJob(RetrieveService retrieveService)
        {
            _retrieveService = retrieveService;
        }

        public Task Execute(IJobExecutionContext context)
        {
            _retrieveService.Retrieve();
            return Task.CompletedTask;
        }
    }

    [DisallowConcurrentExecution]
    public class SyncPriceJob : IJob
    {
        private readonly RetrieveService _retrieveService;
        public SyncPriceJob(RetrieveService retrieveService)
        {
            _retrieveService = retrieveService;
        }
        public Task Execute(IJobExecutionContext context)
        {
            _retrieveService.RetrievePrice();
            return Task.CompletedTask;
        }
    }
}