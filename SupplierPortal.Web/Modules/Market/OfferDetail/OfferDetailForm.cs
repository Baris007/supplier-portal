using Serenity.ComponentModel;
using System;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.OfferDetail")]
[BasedOnRow(typeof(OfferDetailRow), CheckNames = true)]
public class OfferDetailForm
{
    public int OfferId { get; set; }
    public decimal Quantity { get; set; }
    public string Description { get; set; }
    public DateTime StatusDate { get; set; }
    public decimal Price { get; set; }
}