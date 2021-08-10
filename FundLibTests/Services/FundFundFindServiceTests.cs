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
            var service = new DefaultFundService();
            var codes = new[]
            {
                "008281"
            };
            var lst = service.GetFundDetailList(codes);
        }

        [TestMethod()]
        public void GetFundDetailListTest2()
        {
            var service = new DefaultFundService();
            var codes = new[]
            {
                "001938"
            };
            var lst = service.GetFundDetailList(codes);
        }
    }
}