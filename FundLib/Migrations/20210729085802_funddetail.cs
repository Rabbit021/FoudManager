using Microsoft.EntityFrameworkCore.Migrations;

namespace FundLib.Migrations
{
    public partial class funddetail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FundDetail",
                columns: table => new
                {
                    code = table.Column<string>(type: "TEXT", nullable: false),
                    monery = table.Column<double>(type: "REAL", nullable: true),
                    name = table.Column<string>(type: "TEXT", nullable: true),
                    ftype = table.Column<string>(type: "TEXT", nullable: true),
                    lastTime = table.Column<string>(type: "TEXT", nullable: true),
                    assets = table.Column<double>(type: "REAL", nullable: true),
                    stockPercent = table.Column<double>(type: "REAL", nullable: true),
                    bondPercent = table.Column<double>(type: "REAL", nullable: true),
                    cashPercent = table.Column<double>(type: "REAL", nullable: true),
                    otherPercent = table.Column<double>(type: "REAL", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FundDetail", x => x.code);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FundDetail");
        }
    }
}
