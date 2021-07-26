namespace FundLib.Model
{
    public class FundTop10
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public double? Percent { get; set; }
    }

    /// <summary>
    ///  行业数据
    /// </summary>
    public class Sector
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public double? Percent { get; set; }
    }
}