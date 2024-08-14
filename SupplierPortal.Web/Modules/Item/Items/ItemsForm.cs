using Serenity.ComponentModel;

namespace SupplierPortal.Item.Forms;

[FormScript("Item.Items")]
[BasedOnRow(typeof(ItemsRow), CheckNames = true)]
public class ItemsForm
{
    public short ItemCode { get; set; }
    public string ItemName { get; set; }
}