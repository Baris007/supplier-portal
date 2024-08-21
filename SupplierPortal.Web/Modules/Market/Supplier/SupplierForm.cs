using Serenity.ComponentModel;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.Supplier")]
[BasedOnRow(typeof(SupplierRow), CheckNames = true)]
public class SupplierForm
{

    public string CompanyName { get; set; }
    public string Email { get; set; }
}