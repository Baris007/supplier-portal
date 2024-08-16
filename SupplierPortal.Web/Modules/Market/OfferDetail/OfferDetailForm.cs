using Serenity.ComponentModel;
using System;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.OfferDetail")]
[BasedOnRow(typeof(OfferDetailRow), CheckNames = true)]
public class OfferDetailForm
{
    public string Description { get; set; }
    public decimal Quantity { get; set; }
    public decimal Price { get; set; }
    
}