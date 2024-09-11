using Serenity.ComponentModel;
using SupplierPortal.Inventory.Enum;
using SupplierPortal.Market.Enum;
using System;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.OfferDetail")]
[BasedOnRow(typeof(OfferDetailRow), CheckNames = true)]
public class OfferDetailForm
{
    [Tab("Offer Detail"), IgnoreName]
    [Visible(false)]
    public int OfferId { get; set; }
    public int ItemId { get; set; }
    public string Kdv { get; set; }
    public string Unit { get; set; }
    public decimal Quantity { get; set; }
    public decimal Price { get; set; }
    public decimal TotalPrice { get; set; }
    public Currency Curency { get; set; }
    public string Description { get; set; }
    public DateTime Date { get; set; }


}