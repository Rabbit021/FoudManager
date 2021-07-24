﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using FundLib.Services;
using System;
using System.Collections.Generic;
using System.Text;
using FundLib.Extensions;
using FundLibTests;

namespace FundLib.Services.Tests
{
    [TestClass()]
    public class TianTianFundServiceTests : UnitTestBase
    {
        private string code = "000248";

        private static TianTianFundService GetService()
        {
            var service = new TianTianFundService();
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
    }
}