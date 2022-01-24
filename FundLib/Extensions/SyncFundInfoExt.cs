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
            var lst = new List<KeyValuePair<Type, string>>();
            var cron = "0/5 * * * * ?";
            lst.Add(new KeyValuePair<Type, string>(typeof(SyncFundInfoJob), cron));
            lst.Add(new KeyValuePair<Type, string>(typeof(SyncPriceJob), cron));

            foreach (var itr in lst)
            {
                var type = itr.Key;
                var jobName = type.Name;
                var jobKey = new JobKey(jobName);
                config.AddJob(type, jobKey);
                config.AddTrigger(opts => opts.ForJob(jobKey).WithIdentity(jobName)
                    .WithCronSchedule(itr.Value));
            }
        }
    }
}