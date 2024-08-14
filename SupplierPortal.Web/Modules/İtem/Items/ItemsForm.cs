using Serenity.ComponentModel;

namespace SupplierPortal.İtem.Forms;

[FormScript("İtem.Items")]
[BasedOnRow(typeof(ItemsRow), CheckNames = true)]
public class ItemsForm
{
    public short ItemCode { get; set; }
    public string ItemName { get; set; }
}