﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace FundLib.Migrations
{
    public partial class removefunditem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FundItem");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FundItem",
                columns: table => new
                {
                    code = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FundItem", x => x.code);
                });
        }
    }
}
