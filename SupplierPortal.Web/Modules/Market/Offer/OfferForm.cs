using Serenity.ComponentModel;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.Offer")]
[BasedOnRow(typeof(OfferRow), CheckNames = true)]
public class OfferForm
{
    [SupplierEditor]
    public List<SupplierRow> Supplier { get; set; }
    public int ItemId { get; set; }
    public int SupplierId { get; set; }
    public string Email { get; set; }
    public short State { get; set; }

    [OfferDetailEditor]
    public List<OfferDetailRow> Detail { get; set; }
}