using System;
using System.Configuration;
using System.Threading.Tasks;
using FundLib.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Quartz;

namespace FundLib.Extensions
{
    public static class SyncFundInfoExt
    {
        public static void AddJobsService(this IServiceCollection services)
        {
            services.AddQuartz(RegisterJob);
            services.AddQuartzHostedService(options =>
            {
                options.WaitForJobsToComplete = true;
            });
        }

        private static void RegisterJob(IServiceCollectionQuartzConfigurator config)
        {
            config.SchedulerId = "Scheduler-Core";
            config.UseMicrosoftDependencyInjectionJobFactory();
            config.ScheduleJob<Job>(trigger => trigger.WithCronSchedule("0/10 * * * * ? *"));
        }
    }

    public class Job : IJob
    {
        public Job(RetrieveService retrieveService)
        {

        }

        public Task Execute(IJobExecutionContext context)
        {
            Console.WriteLine(context.JobDetail.Description);
            return Task.CompletedTask;
        }
    }
}