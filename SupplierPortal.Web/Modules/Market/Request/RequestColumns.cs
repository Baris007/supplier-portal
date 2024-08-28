using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.Request")]
[BasedOnRow(typeof(RequestRow), CheckNames = true)]
public class RequestColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public int CompanyName { get; set; }
    public int OfferId { get; set; }
    public DateTime OfferDate { get; set; }
    public DateTime ValueDate { get; set; }
    public short State { get; set; }
    public short Currency { get; set; }
    public short CurrencyType { get; set; }
    public double Exchangerate { get; set; }
    public DateTime DeliveryTime { get; set; }
    [EditLink]
    public string Representatives { get; set; }
    public string ToWho { get; set; }
    public string EMail { get; set; }
    public string CallNumber { get; set; }
}