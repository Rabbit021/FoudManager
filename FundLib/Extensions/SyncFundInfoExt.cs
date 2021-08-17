using System;
using System.Collections.Generic;
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
            ScheduleJobs(config);
        }

        public static void ScheduleJobs(IServiceCollectionQuartzConfigurator config)
        {
            var lst = new List<Type>();
            lst.Add(typeof(SyncFundInfoJob));

            foreach (var type in lst)
            {
                var jobName = type.Name;
                var jobKey = new JobKey(jobName);
                config.AddJob(type, jobKey);
                config.AddTrigger(opts => opts.ForJob(jobKey).WithIdentity(jobName)
                    .WithCronSchedule("0/5 * * * * ?"));
            }
        }
    }
}