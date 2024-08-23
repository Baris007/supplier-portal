using Serenity.ComponentModel;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.Offer")]
[BasedOnRow(typeof(OfferRow), CheckNames = true)]
public class OfferForm
{
    [DisplayName("OfferSupplier"), OfferSupplierEditor, IgnoreName]
    public List<OfferSupplierRow> OfferSupplier { get; set; }

    public short State { get; set; }

    //[DisplayName("Detail"), OfferDetailEditor, IgnoreName]
    //public List<OfferDetailRow> Detail { get; set; }
}