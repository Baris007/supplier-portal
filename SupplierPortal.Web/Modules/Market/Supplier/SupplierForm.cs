using Serenity.ComponentModel;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.Supplier")]
[BasedOnRow(typeof(SupplierRow), CheckNames = true)]
public class SupplierForm
{
    public string CompanyName { get; set; }
    public string Email { get; set; }
    public string OfficalName { get; set; }
    public string OfficalSurname { get; set; }
    public string CallNumber { get; set; }
}