using Serenity.ComponentModel;

namespace SupplierPortal.ScheduledEmail.Forms;

[FormScript("ScheduledEmail.Email")]
[BasedOnRow(typeof(EmailRow), CheckNames = true)]
public class EmailForm
{
    public int OfferSupplierId { get; set; }
    public int OfferId { get; set; }
    public bool IsSended { get; set; }
    public bool IsAutoSended { get; set; }
}