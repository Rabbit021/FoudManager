using System.Configuration;
using FundLib.Jobs;
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
            config.ScheduleJob<SyncFundInfoJob>(trigger => trigger.WithCronSchedule("0/10 * * * * ? *"));
        }
    }
}