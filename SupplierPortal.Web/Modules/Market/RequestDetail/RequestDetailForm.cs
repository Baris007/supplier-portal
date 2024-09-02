using Serenity.ComponentModel;
using System;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.RequestDetail")]
[BasedOnRow(typeof(RequestDetailRow), CheckNames = true)]
public class RequestDetailForm
{
    public int RequestId { get; set; }
    public string ItemName { get; set; }
    public decimal Quantity { get; set; }
    public decimal Price { get; set; }
    public decimal TotalPrice { get; set; }
    public short Currency { get; set; }
    public string Description { get; set; }
    public DateTime Date { get; set; }
}