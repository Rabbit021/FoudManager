using Autofac;
using Autofac.Core;
using Autofac.Core.Registration;
using AutoMapper;
using FundLib;
using FundLib.Interface;
using FundLib.Model;
using FundLib.Model.TianTian;
using FundLib.Services;

namespace FundService
{
    public class TypeRegister : BaseTypeRegister
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            // TODO
        }

        protected override void RegisterAutoMapper(ContainerBuilder builder)
        {
            var autoMapperProfiles = new[] { typeof(AutoMapperProfile) };
            builder.Register(ctx => new MapperConfiguration(cfg =>
            {
                foreach (var profile in autoMapperProfiles)
                {
                    cfg.AddProfile(profile);
                }
            }));
            builder.Register(ctx => ctx.Resolve<MapperConfiguration>().CreateMapper()).As<IMapper>().InstancePerLifetimeScope();
        }
    }

    // ¿‡–Õ◊÷∂Œ”≥…‰
    public class AutoMapperProfile : BaseProfile
    {
      
    }
}