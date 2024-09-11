using Serenity.ComponentModel;
using SupplierPortal.Inventory.Enum;
using SupplierPortal.Market.Enum;
using System;
using System.ComponentModel;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.OfferDetail")]
[BasedOnRow(typeof(OfferDetailRow), CheckNames = true)]
public class OfferDetailColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    [Visible(false)]
    public int Id { get; set; }
    [Visible(false)]
    public int OfferId { get; set; }
    [EditLink]
    public string ItemName { get; set; }
    public string Kdv { get; set; }
    public string Unit { get; set; }
    public decimal Quantity { get; set; }
    public decimal Price { get; set; }
    public decimal TotalPrice { get; set; }
    public Currency Curency { get; set; }
    [EditLink]
    public string Description { get; set; }
    [Visible(false)]
    public int ItemId { get; set; }
    public DateTime Date { get; set; }


}