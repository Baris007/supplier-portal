using Serenity.ComponentModel;

namespace SupplierPortal.Portal.Forms;

[FormScript("Portal.Supplier")]
[BasedOnRow(typeof(SupplierRow), CheckNames = true)]
public class SupplierForm
{
    public string CompanyName { get; set; }
    public string Email { get; set; }
}