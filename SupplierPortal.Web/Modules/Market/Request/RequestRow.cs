using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Demo.Northwind;
using SupplierPortal.Market.Columns;
using SupplierPortal.Market.Enum;
using SupplierPortal.Modules.Market.Request.Enum;
using System;
using System.ComponentModel;
using static Serenity.Demo.Northwind.MVC.Views;

namespace SupplierPortal.Market;

[ConnectionKey("Default"), Module("Market"), TableName("Request")]
[DisplayName("Request"), InstanceName("Request")]
[ReadPermission("Marketing:Request")]
[ModifyPermission("Marketing:Request")]
[ServiceLookupPermission("Marketing:Request")]
[DataAuditLog]
public sealed class RequestRow : Row<RequestRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Company Name")]
    public int? CompanyName { get => fields.CompanyName[this]; set => fields.CompanyName[this] = value; }

    [DisplayName("Request"), MasterDetailRelation(foreignKey:nameof(RequestDetailRow.RequestId),ColumnsType =typeof(RequestDetailColumns))]
    public List<RequestDetailRow> RequestId { get => fields.RequestId[this]; set => fields.RequestId[this] = value; }

    [DisplayName("Offer Date")]
    public DateTime? OfferDate { get => fields.OfferDate[this]; set => fields.OfferDate[this] = value; }

    [DisplayName("Value Date")]
    public DateTime? ValueDate { get => fields.ValueDate[this]; set => fields.ValueDate[this] = value; }

    [DisplayName("State")]
    public string RequestState { get => fields.RequestState[this]; set => fields.RequestState[this] = value; }

    //[DisplayName("State")]
    //public State? State { get => fields.State[this]; set => fields.State[this] = value; }

    //[DisplayName("Currency")]
    //public Currency? Currency { get => fields.Currency[this]; set => fields.Currency[this] = value; }

    [DisplayName("Currency Type")]
    public CurrencyType? CurrencyType { get => fields.CurrencyType[this]; set => fields.CurrencyType[this] = value; }

    [DisplayName("Exchangerate")]
    public double? Exchangerate { get => fields.Exchangerate[this]; set => fields.Exchangerate[this] = value; }

    [DisplayName("Delivery Time")]
    public DateTime? DeliveryTime { get => fields.DeliveryTime[this]; set => fields.DeliveryTime[this] = value; }

    [DisplayName("Representatives"), Size(50), QuickSearch, NameProperty]
    public string Representatives { get => fields.Representatives[this]; set => fields.Representatives[this] = value; }

    [DisplayName("To Who"), Size(50)]
    public string ToWho { get => fields.ToWho[this]; set => fields.ToWho[this] = value; }

    [DisplayName("E Mail"), Column("E-mail"), Size(50)]
    public string EMail { get => fields.EMail[this]; set => fields.EMail[this] = value; }

    [DisplayName("Call Number"), Size(15)]
    public string CallNumber { get => fields.CallNumber[this]; set => fields.CallNumber[this] = value; }



    [DisplayName("Sub Total"), Size(18), Scale(3), DisplayFormat("#,##0.00"), AlignRight]
    public decimal? SubTotal
    {
        get => fields.SubTotal[this];
        set => fields.SubTotal[this] = value;
    }
    [DisplayName("Line Discount"), Size(18), Scale(3)]
    public decimal? LineDiscount
    {
        get => fields.LineDiscount[this];
        set => fields.LineDiscount[this] = value;
    }
    [DisplayName("Discount Rate"), Size(18), Scale(3), DefaultValue(0)]
    public decimal? DiscountRate
    {
        get => fields.DiscountRate[this];
        set => fields.DiscountRate[this] = value;
    }
    [DisplayName("Discount Total"), Size(18), Scale(3), DefaultValue(0)]
    public decimal? DiscountTotal
    {
        get => fields.DiscountTotal[this];
        set => fields.DiscountTotal[this] = value;
    }
    [DisplayName("Gross Total"), Size(18), Scale(3), DisplayFormat("#,##0.00"), AlignRight]
    public decimal? GrossTotal
    {
        get => fields.GrossTotal[this];
        set => fields.GrossTotal[this] = value;
    }
    [DisplayName("Vat"), Size(18), Scale(3), DefaultValue(20)]
    public decimal? Vat
    {
        get => fields.Vat[this];
        set => fields.Vat[this] = value;
    }
    [DisplayName("Total"), Size(18), Scale(3), DisplayFormat("#,##0.00"), AlignRight]
    public decimal? Total
    {
        get => fields.Total[this];
        set => fields.Total[this] = value;
    }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field CompanyName;
       
        public DateTimeField OfferDate;
        public DateTimeField ValueDate;
        //public EnumField<Enum.State> State;
        //public EnumField<Currency> Currency;
        public StringField RequestState;
        public EnumField<CurrencyType> CurrencyType;
        public DoubleField Exchangerate;
        public DateTimeField DeliveryTime;
        public StringField Representatives;
        public StringField ToWho;
        public StringField EMail;
        public StringField CallNumber;
        public RowListField<RequestDetailRow> RequestId;

        public DecimalField SubTotal;
        public DecimalField LineDiscount;
        public DecimalField DiscountRate;
        public DecimalField DiscountTotal;
        public DecimalField GrossTotal;
        public DecimalField Vat;
        public DecimalField Total;

    }
}