using Serenity.ComponentModel;
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
    public string ItemName { get; set; }
    public decimal Quantity { get; set; }
    public decimal Price { get; set; }
    [EditLink]
    public string Description { get; set; }
    public int ItemId { get; set; }
    public string Curency { get; set; }
    public DateTime Date { get; set; }
    public decimal TotalPrice { get; set; }
}