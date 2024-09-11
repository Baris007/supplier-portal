using Serenity.ComponentModel;
using SupplierPortal.Market.Enum;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.Offer")]
[BasedOnRow(typeof(OfferRow), CheckNames = true)]
public class OfferForm
{
    [OfferSupplierEditor]
    public List<OfferSupplierRow> CompanyName { get; set; }
    [Visible(false)]
    public State State { get; set; }
    //[ReadOnly(true)]
    //public string Email { get; set; }
    [Width(100)]
    public DateTime OfferDate { get; set; }
    [Width(100)]
    public DateTime ValueDate { get; set; }

    [DisplayName("Detail"), OfferDetailEditor, IgnoreName]
    public List<OfferDetailRow> Detail { get; set; }
}