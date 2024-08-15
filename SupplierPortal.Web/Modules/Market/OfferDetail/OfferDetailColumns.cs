using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.OfferDetail")]
[BasedOnRow(typeof(OfferDetailRow), CheckNames = true)]
public class OfferDetailColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public string OfferEmail { get; set; }
    public decimal Quantity { get; set; }
    [EditLink]
    public string Description { get; set; }
    public DateTime StatusDate { get; set; }
    public decimal Price { get; set; }
}