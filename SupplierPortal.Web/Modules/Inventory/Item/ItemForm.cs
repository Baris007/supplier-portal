using Serenity.ComponentModel;
using SupplierPortal.Inventory.Enum;

namespace SupplierPortal.Inventory.Forms;

[FormScript("Inventory.Item")]
[BasedOnRow(typeof(ItemRow), CheckNames = true)]
public class ItemForm
{
    public string ItemCode { get; set; }
    public string ItemName { get; set; }
    public KDV KDV { get; set; }
    public Unit Unit { get; set; }

}