using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace FundLib.Model.DataBaseModel
{
    public class FundItem
    {
        [Key]
        public string code { get; set; }
    }
}