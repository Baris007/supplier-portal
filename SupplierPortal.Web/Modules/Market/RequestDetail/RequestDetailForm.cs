using Serenity.ComponentModel;
using SupplierPortal.Inventory;
using SupplierPortal.Market.Enum;
using System;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.RequestDetail")]
[BasedOnRow(typeof(RequestDetailRow), CheckNames = true)]
public class RequestDetailForm
{

    //public int RequestId { get; set; }
    [LookupEditor(typeof(ItemRow))]
    public int ItemId { get; set; }
    public string Kdv { get; set; }
    public string Unit { get; set; }
    public decimal Quantity { get; set; }
    public decimal Price { get; set; }
    public decimal TotalPrice { get; set; }
    public Currency Currency { get; set; }
    public string Description { get; set; }
    public DateTime Date { get; set; }
}