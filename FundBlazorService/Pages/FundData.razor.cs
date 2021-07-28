﻿using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using FundLib.Model;
using Smart.Blazor;

namespace FundBlazorService.Pages
{
    public partial class FundData
    {
        private List<TableColumn> columns = new List<TableColumn>();
        private List<FundDetail> fundList = new List<FundDetail>();
        private List<string> codes = new List<string>();
        private string newCode;

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

            return base.OnInitializedAsync();
        }

        // 添加基金
        private void AddFund()
        {
            if (!string.IsNullOrEmpty(newCode))
            {
                codes.Add(newCode);
                Refresh();
            }
        }

        /// <summary>
        /// 刷新基金数据
        /// </summary>
        private void Refresh()
        {
            fundList = CommonService.GetFundList(codes);
            codes = fundList.Select(x => x.code).ToList();
        }
    }
}
