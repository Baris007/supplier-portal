using Serenity.ComponentModel;
using System;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.OfferDetail")]
[BasedOnRow(typeof(OfferDetailRow), CheckNames = true)]
public class OfferDetailForm
{
    [Visible(false)]
    public int OfferId { get; set; }
    public int ItemId { get; set; }
    public decimal Quantity { get; set; }
    public decimal Price { get; set; }
    public string Description { get; set; }
    public string Curency { get; set; }
    public DateTime Date { get; set; }
    public decimal TotalPrice { get; set; }
}