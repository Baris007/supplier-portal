using Serenity.ComponentModel;

namespace SupplierPortal.Portal.Forms;

[FormScript("Portal.Items")]
[BasedOnRow(typeof(ItemsRow), CheckNames = true)]
public class ItemsForm
{
    public short ItemCode { get; set; }
    public string ItemName { get; set; }
}