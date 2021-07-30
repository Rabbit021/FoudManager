using System;
using Autofac;
using Microsoft.Extensions.Configuration;

namespace FundLib
{
    public class PublicDatas
    {
        public static IConfiguration Configuration { get; set; }
        public static ILifetimeScope Container { get; set; }
        public static IServiceProvider ServiceProvider { get; set; }

        public static T GetConfig<T>(string key) where T : class, new()
        {
            var rst = new T();
            Configuration.GetSection(key).Bind(rst);
            return rst;
        }

        public static TSource Resolve<TSource>()
        {
            return Container.Resolve<TSource>();
        }
    }
}