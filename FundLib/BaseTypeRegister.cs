using Autofac;
using AutoMapper;
using FundLib.Interface;
using FundLib.Services;

namespace FundLib
{
    public class BaseTypeRegister : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            // automapper映射
            RegisterAutoMapper(builder);

            builder.RegisterType<ProcessService>().As<IPrcessData>().SingleInstance();
            builder.RegisterType<TianTianFundService>().As<IFundFindService>().SingleInstance();
            builder.RegisterType<CommonService>().SingleInstance();
            builder.RegisterType<AppSettings>().SingleInstance();
            builder.RegisterType<RepositoryService>().InstancePerLifetimeScope();
        }

        protected virtual void RegisterAutoMapper(ContainerBuilder builder)
        {
           
        }
    }
}