using FundManager.Model;

namespace FundManager.Interface
{
    public interface IFindService
    {
        FundDetail GetFundDetail(string code);
    }
}