using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.Items.Columns;

[ColumnsScript("Items.Item")]
[BasedOnRow(typeof(ItemRow), CheckNames = true)]
public class ItemColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public int ItemId { get; set; }
    [EditLink]
    public string ItemName { get; set; }
}