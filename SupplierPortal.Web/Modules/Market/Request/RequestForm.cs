using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Localization;
using SupplierPortal.Market.Enum;
using SupplierPortal.Modules.Market.Request.Enum;
using System;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.Request")]
[BasedOnRow(typeof(RequestRow), CheckNames = true)]
public class RequestForm
{
    [LookupEditor(typeof(SupplierRow))]
    [QuarterWidth(UntilNext = true)]

    public string CompanyName { get; set; }
    //public int OfferId { get; set; }
    public DateTime OfferDate { get; set; }
    public DateTime ValueDate { get; set; }
    public State State { get; set; }
    public Currency Currency { get; set; }
    public CurrencyType CurrencyType { get; set; }
    public double Exchangerate { get; set; }
    public DateTime DeliveryTime { get; set; }
    public string Representatives { get; set; }
    public string ToWho { get; set; }
    public string EMail { get; set; }
    public string CallNumber { get; set; }

    [FullWidth]
    [DisplayName("Request"), RequestDetailEditor, IgnoreName]
    public List<RequestDetailRow> RequestId { get; set; }

    public decimal SubTotal { get; set; }
    [QuarterWidth]
    [CssClass("CalculatedFields")]
    [ReadOnly(true)]
    public decimal LineDiscount { get; set; }
    [QuarterWidth]
    [CssClass("CalculatedFields")]
    public decimal DiscountRate { get; set; }
    [QuarterWidth]
    [CssClass("CalculatedFields")]
    public decimal DiscountTotal { get; set; }
    [QuarterWidth]
    [CssClass("CalculatedFields")]
    [ReadOnly(true)]
    public decimal GrossTotal { get; set; }
    [QuarterWidth]
    [CssClass("CalculatedFields")]
    [ReadOnly(true)]
    public decimal Vat { get; set; }
    [QuarterWidth]
    [CssClass("CalculatedFields")]
    [ReadOnly(true)]
    public decimal Total { get; set; }
    //[Tab("Db.SalesMarketing.Sales.Detail")]
    //[Category("Müşteri Kodları"), Collapsible(true)]
}
