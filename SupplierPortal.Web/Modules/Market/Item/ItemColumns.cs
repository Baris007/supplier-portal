using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.Item")]
[BasedOnRow(typeof(ItemRow), CheckNames = true)]
public class ItemColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public short ItemCode { get; set; }
    [EditLink]
    public string ItemName { get; set; }
}