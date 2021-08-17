using System;

namespace FundLib.Extensions
{
    public static class StringExt
    {
        public static string GetTimeStamp(this DateTime time)
        {
            long timeStamp = DateTimeOffset.Now.ToUnixTimeMilliseconds();
            return timeStamp + "";
        }
    }
}