using Serenity.ComponentModel;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.Offer")]
[BasedOnRow(typeof(OfferRow), CheckNames = true)]
public class OfferForm
{
    [OfferSupplierEditor]
    public List<OfferSupplierRow> CompanyName { get; set; }
    public short State { get; set; }
    [OfferDetailEditor]
    public List<OfferDetailRow> Detail { get; set; }
}