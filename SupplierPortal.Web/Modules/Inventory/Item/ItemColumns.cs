using Serenity.ComponentModel;
using SupplierPortal.Inventory.Enum;
using System.ComponentModel;

namespace SupplierPortal.Inventory.Columns;

[ColumnsScript("Inventory.Item")]
[BasedOnRow(typeof(ItemRow), CheckNames = true)]
public class ItemColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    [Visible (false)]
    public int Id { get; set; }
    [EditLink]
    public string ItemCode { get; set; }
    [EditLink]
    public string ItemName { get; set; }
    public KDV KDV { get; set; }
    public Unit Unit { get; set; }
}