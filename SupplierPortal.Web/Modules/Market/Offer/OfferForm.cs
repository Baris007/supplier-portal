using Serenity.ComponentModel;
using System.IO;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.Offer")]
[BasedOnRow(typeof(OfferRow), CheckNames = true)]
public class OfferForm
{
    public short Amount { get; set; }
    public string ItemName { get; set; }
    public string CompanyName { get; set; }
    public string Email { get; set; }
    public Stream State { get; set; }
    public int ItemId { get; set; }
    public int SupplierId { get; set; }
}