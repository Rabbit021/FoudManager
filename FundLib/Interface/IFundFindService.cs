using FundLib.Model;
using System.Collections.Generic;
using FundLib.Model.TianTian;

namespace FundLib.Interface
{
    public interface IFundFindService
    {
        FundInfo GetFundInfo(string code);

        /// <summary>
        /// 获取基金概况
        /// </summary>
        FundMNDetailInformation GetFundMNDetailInformation(string code);

        /// <summary>
        /// 最新持仓的比例
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        FundMNAssetAllocationNew GetFundMNAssetAllocationNew(string code);

        /// <summary>
        /// 最新持仓
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        FundMNInverstPosition GetFundMNInverstPosition(string code);

        /// <summary>
        /// 行业比例
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        List<FundMNSectorAllocation> GetFundMNSectorAllocation(string code);

        /// <summary>
        /// 基金规模
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        List<FundMNShareScaleList> GetFundMNShareScaleList(string code);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        List<FundMNAssetsList> GetFundMNAssetsList(string code);

        /// <summary>
        /// 季度增幅
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        List<FundMNPeriodIncrease> GetFundMNPeriodIncrease(string code);

        /// <summary>
        /// 天天基金特有数据，夏普比例
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        FundMNUniqueInfo PostFundMNUniqueInfo(string code);

        /// <summary>
        /// 获取基金净值
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        FundMNFInfo PostFundMNFInfo(string code);
    }
}