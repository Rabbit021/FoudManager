using System;
using System.Net.Http;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using FundLib;
using FundLib.Extensions;
using Quartz;

namespace FundService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            PublicDatas.Configuration = configuration;
        }

        private void OnStarted()
        {
            // TODO 启动任务

        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddResponseCaching(options =>
            {
                options.UseCaseSensitivePaths = false;
                options.MaximumBodySize = 1024;
                options.SizeLimit = 100 * 1024 * 1024;
            });

            services.AddDistributedMemoryCache();
            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromSeconds(10);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });
            services.AddJobsService();
            services.AddHttpClient();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IHostApplicationLifetime lifetime)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            PublicDatas.ServiceProvider = app.ApplicationServices;
            PublicDatas.Container = app.ApplicationServices.GetAutofacRoot();
            lifetime.ApplicationStarted.Register(OnStarted);
            app.UseStaticFiles();
            app.UseStaticFiles("/Web");
            app.UseResponseCaching();
            app.UseRouting();
            app.UseSession();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }

        /// <summary>
        /// Autofac注册实例
        /// </summary>
        public void ConfigureContainer(ContainerBuilder builder)
        {
            builder.RegisterModule(new TypeRegister());
        }
    }
}
