using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using FundLib.Model;
using FundLib.Services;
using Microsoft.AspNetCore.Components;
using Smart.Blazor;

namespace FundBlazorService.Pages
{
    public partial class FundData
    {
        [Inject] private CommonService commonService { get; set; }

        private List<TableColumn> columns = new List<TableColumn>();
        private List<FundDetail> fundList = new List<FundDetail>();
        private IEnumerable<object> Selected = new List<object>();
        private DateTime refreshTime;

        private string newCode = "";

        protected override Task OnInitializedAsync()
        {
            var type = typeof(FundDetail);
            var perperties = type.GetProperties();
            foreach (var propertyInfo in perperties)
            {
                var display = propertyInfo.GetCustomAttribute<ColumnAttribute>();
                if (display == null) continue;
                columns.Add(new TableColumn() { Label = display.DisplayName, DataField = propertyInfo.Name });
            }
            Refresh();
            return base.OnInitializedAsync();
        }

        // 添加基金
        private void AddFund()
        {
            if (!string.IsNullOrEmpty(newCode))
            {
                commonService.SaveFund(new[] { newCode });
                Refresh();
            }
        }

        private void Refresh()
        {
            fundList = commonService.FindFundList();
            refreshTime = DateTime.Now;
        }
    }
}
