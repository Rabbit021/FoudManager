using System.Net.Http;
using Autofac;
using FundLib;

namespace FundLibTests
{
    public class UnitTestBase
    {
        protected ILifetimeScope Container;
        protected HttpClient httpClient;

        public UnitTestBase()
        {
            OnInitlzie();
        }

        protected virtual void OnInitlzie()
        {
            var args = new[] { "" };
            var factory = new MyWebApplicationFactory(args);
            var testServer = factory.Server;
            httpClient = testServer.CreateClient();
            Container = PublicDatas.Container;
        }
    }
}