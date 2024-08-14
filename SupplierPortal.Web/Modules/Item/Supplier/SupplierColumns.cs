using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.Item.Columns;

[ColumnsScript("Item.Supplier")]
[BasedOnRow(typeof(SupplierRow), CheckNames = true)]
public class SupplierColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string CompanyName { get; set; }
    public string Email { get; set; }
}