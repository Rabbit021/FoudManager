using Microsoft.VisualStudio.TestTools.UnitTesting;
using FundLibTests;
using FundLib;
using Autofac;
using FundLib.Model.DataBaseModel;

namespace FundLib.Services.Tests
{
    [TestClass()]
    public class FundManagerServiceTests : UnitTestBase
    {
        [TestMethod()]
        public void AddOrUpdateFundTest()
        {
            var service = Container.Resolve<FundManagerService>();

            var fundPosition = new FundPosition()
            {
                fcode = "000248",
                cost = 0,
                fund_share = 0
            };
            service.AddOrUpdateFund(fundPosition);
        }
    }
}