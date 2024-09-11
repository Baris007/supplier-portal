using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.RequestDetail")]
[BasedOnRow(typeof(RequestDetailRow), CheckNames = true)]
public class RequestDetailColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    [Visible(false)]
    public int Id { get; set; }
    
    [EditLink]
    public int ItemId { get; set; }
    //public string ItemName { get; set; }
    public string Kdv { get; set; }
    public string Unit { get; set; }
    public decimal Quantity { get; set; }
    public decimal Price { get; set; }
    public decimal TotalPrice { get; set; }
    public short Currency { get; set; }
    public string Description { get; set; }
    public DateTime Date { get; set; }
    [Visible(false)]
    public int RequestId { get; set; }
}