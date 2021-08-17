using System;
using FundLib.Extensions;
using FundLib.Services;
using FundLibTests;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace FundLib.Services.Tests
{
    [TestClass()]
    public class DefaultFundServiceTests : UnitTestBase
    {
        private string code = "000248";
        //private string fcode = "008281";

        private static DefaultFundService GetService()
        {
            var service = new DefaultFundService();
            return service;
        }


        [TestMethod()]
        public void GetFundMNDetailInformationTest()
        {
            var service = GetService();
            var lst = service.GetFundMNDetailInformation(code);
            Console.WriteLine(lst.AsJObject());
        }


        [TestMethod()]
        public void GetFundMNAssetAllocationNewTest()
        {
            var service = GetService();
            var lst = service.GetFundMNAssetAllocationNew(code);
            Console.WriteLine(lst.AsJObject());
        }

        [TestMethod()]
        public void GetFundMNInverstPositionTest()
        {
            var service = GetService();
            var lst = service.GetFundMNInverstPosition(code);
            Console.WriteLine(lst.AsJObject());
        }

        [TestMethod()]
        public void GetFundMNSectorAllocationTest()
        {
            var service = GetService();
            var lst = service.GetFundMNSectorAllocation(code);
            Console.WriteLine(lst.AsJObject());
        }

        [TestMethod()]
        public void GetFundMNShareScaleListTest()
        {
            var service = GetService();
            var lst = service.GetFundMNShareScaleList(code);
            Console.WriteLine(lst.AsJObject());
        }

        [TestMethod()]
        public void GetFundMNAssetsListTest()
        {
            var service = GetService();
            var lst = service.GetFundMNAssetsList(code);
            Console.WriteLine(lst.AsJObject());
        }

        [TestMethod()]
        public void PostFundMNUniqueInfoTest()
        {
            var service = GetService();
            var lst = service.PostFundMNUniqueInfo(code);
            Console.WriteLine(lst.AsJObject());
        }

        [TestMethod()]
        public void GetFundMNPeriodIncreaseTest()
        {
            var service = GetService();
            var lst = service.GetFundMNPeriodIncrease(code);
            Console.WriteLine(lst.AsJObject());
        }

        [TestMethod()]
        public void GetFundDetailTest()
        {
            var service = GetService();
            var lst = service.GetFundInfo(code);
            Console.WriteLine(lst.AsJObject());
        }

        [TestMethod()]
        public void GetFundListByThemeTest()
        {
            var service = GetService();
            service.GetFundListByTheme();
        }
    }
}