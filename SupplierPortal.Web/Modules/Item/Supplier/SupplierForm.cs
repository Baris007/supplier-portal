using Serenity.ComponentModel;

namespace SupplierPortal.Item.Forms;

[FormScript("Item.Supplier")]
[BasedOnRow(typeof(SupplierRow), CheckNames = true)]
public class SupplierForm
{
    public string CompanyName { get; set; }
    public string Email { get; set; }
}