using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.Item.Columns;

[ColumnsScript("Item.Items")]
[BasedOnRow(typeof(ItemsRow), CheckNames = true)]
public class ItemsColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public short ItemCode { get; set; }
    [EditLink]
    public string ItemName { get; set; }
}