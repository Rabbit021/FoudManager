using Microsoft.VisualStudio.TestTools.UnitTesting;
using FundLib.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace FundLib.Services.Tests
{
    [TestClass()]
    public class FundFundFindServiceTests
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