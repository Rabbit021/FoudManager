using Autofac;
using Autofac.Core;
using Autofac.Core.Registration;
using FundLib;
using FundLib.Interface;
using FundLib.Services;

namespace FundService
{
    public class TypeRegister : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<ProcessService>().As<IPrcessData>().SingleInstance();
            builder.RegisterType<FundFundFindService>().As<IFundFindService>().SingleInstance();

            var settings = PublicDatas.Resolve<TianTianSettings>("TianTianParam");
            builder.RegisterInstance(settings).SingleInstance();
        }
    }
}