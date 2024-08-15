using Serenity.ComponentModel;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.Item")]
[BasedOnRow(typeof(ItemRow), CheckNames = true)]
public class ItemForm
{
    public short ItemCode { get; set; }
    public string ItemName { get; set; }
}