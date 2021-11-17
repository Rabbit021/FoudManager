using FundLib.Model.DataBaseModel;

namespace FundLib.Services
{
    /// <summary>
    /// 基金持仓管理
    /// </summary>
    public class FundManagerService : IFundManagerService
    {
        private FundDbContext dbContext;

        public FundManagerService(FundDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public FundPosition AddOrUpdateFund(FundPosition fundPosition)
        {
            if (fundPosition == null)
                return null;
            var lst = new[] { fundPosition };
            var rst = dbContext.Save(lst);
            if (rst > 0)
                return fundPosition;
            return null;
        }
    }

    public interface IFundManagerService
    {
        FundPosition AddOrUpdateFund(FundPosition fundPosition);
    }
}