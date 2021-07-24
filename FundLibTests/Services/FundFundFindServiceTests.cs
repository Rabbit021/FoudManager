using FundLib.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace FundLibTests.Services
{
    [TestClass()]
    public class FundFundFindServiceTests : UnitTestBase
    {
        [TestMethod()]
        public void GetFundDetailListTest()
        {
            var service = new FundFundFindService();
            var codes = new string[]
            {
                "008281"
            };
            var lst = service.GetFundDetailList(codes);
        }

        [TestMethod()]
        public void GetFundDetailListTest2()
        {
            var service = new FundFundFindService();
            var codes = new string[]
            {
                "001938"
            };
            var lst = service.GetFundDetailList(codes);
        }
    }
}