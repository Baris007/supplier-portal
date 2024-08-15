using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.Inventory.Columns;

[ColumnsScript("Inventory.Item")]
[BasedOnRow(typeof(ItemRow), CheckNames = true)]
public class ItemColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public short ItemCode { get; set; }
    [EditLink]
    public string ItemName { get; set; }
}