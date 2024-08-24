using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.Supplier")]
[BasedOnRow(typeof(SupplierRow), CheckNames = true)]
public class SupplierColumns
{
    public int Id { get; set; }
    public string CompanyName { get; set; }
    public string Email { get; set; }
}