using Serenity.ComponentModel;

namespace SupplierPortal.Inventory.Forms;

[FormScript("Inventory.Item")]
[BasedOnRow(typeof(ItemRow), CheckNames = true)]
public class ItemForm
{
    public short ItemCode { get; set; }
    public string ItemName { get; set; }
}