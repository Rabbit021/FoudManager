using FundLib;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Autofac;
using FundLib.Model.DataBaseModel;
using Microsoft.Extensions.Configuration;

namespace FundLibTests
{
    /// <summary>
    ///  生成数据库表
    /// </summary>
    [TestClass()]
    public class GenerateDb : UnitTestBase
    {
        [TestMethod]
        public void Generate()
        {
            var context = Container.Resolve<FundDbContext>();
            context.Initlize();
        }
    }
}
