using System;
using System.Threading.Tasks;
using FundLib.Services;
using Quartz;

namespace FundLib.Jobs
{
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
            //Console.WriteLine(context.JobDetail.Description);
            return Task.CompletedTask;
        }
    }
}