using System.Collections.Generic;
using System.IO;
using System.Text;
using Autofac.Extensions.DependencyInjection;
using FundService;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.Hosting;

namespace FundLibTests
{
    public class MyWebApplicationFactory : WebApplicationFactory<Program>
    {
        private static string dir = Path.GetDirectoryName(typeof(MyWebApplicationFactory).Assembly.Location);
        public string[] args;
        public MyWebApplicationFactory(string[] args)
        {
            this.args = args;
        }
        protected override IHostBuilder CreateHostBuilder()
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            var builder = Host.CreateDefaultBuilder(args)
                .UseEnvironment(Environments.Development)
                .UseServiceProviderFactory(new AutofacServiceProviderFactory())
                .ConfigureAppConfiguration((context, builder) =>
                {
                    Program.LoadConfigFile(context, builder);
                })
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
            return builder;
        }
    }
}