using Serenity.ComponentModel;

namespace SupplierPortal.Items.Forms;

[FormScript("Items.Item")]
[BasedOnRow(typeof(ItemRow), CheckNames = true)]
public class ItemForm
{
    public int ItemId { get; set; }
    public string ItemName { get; set; }
}