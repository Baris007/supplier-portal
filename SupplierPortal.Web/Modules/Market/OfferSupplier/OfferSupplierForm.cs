using Serenity.ComponentModel;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.OfferSupplier")]
[BasedOnRow(typeof(OfferSupplierRow), CheckNames = true)]
public class OfferSupplierForm
{
    public int SupplierId { get; set; }
    public int OfferId { get; set; }
}