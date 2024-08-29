using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SupplierPortal.Inventory;
using SupplierPortal.Inventory.Enum;
using SupplierPortal.Market.Enum;
using System;
using System.ComponentModel;
using static Serenity.Demo.Northwind.MVC.Views;

namespace SupplierPortal.Market;

[ConnectionKey("Default"), Module("Market"), TableName("OfferDetail")]
[DisplayName("Offer Detail"), InstanceName("Offer Detail")] 
[ReadPermission("Marketing:Request")]
[ModifyPermission("Marketing:Request")]
[ServiceLookupPermission("Marketing:Request")]
[LookupScript]
public sealed class OfferDetailRow : Row<OfferDetailRow.RowFields>, IIdRow, INameRow
{
    const string jItem = nameof(jItem);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Offer Id"), LookupInclude]
    public int? OfferId { get => fields.OfferId[this]; set => fields.OfferId[this] = value; }

    [DisplayName("Quantity"), Size(18), Scale(2)]
    public decimal? Quantity { get => fields.Quantity[this]; set => fields.Quantity[this] = value; }

    [DisplayName("Price"), Size(18), Scale(5), ReadOnly(true)]
    public decimal? Price { get => fields.Price[this]; set => fields.Price[this] = value; }

    [DisplayName("Description"), Size(500), QuickSearch, NameProperty]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    [DisplayName("Item Name"), NotNull, ForeignKey(typeof(ItemRow)), LeftJoin(jItem), TextualField(nameof(ItemName))]
    [LookupEditor(typeof(ItemRow), Async = true)]
    public int? ItemId { get => fields.ItemId[this]; set => fields.ItemId[this] = value; }
    [DisplayName("Item Name"), Origin(jItem, nameof(ItemRow.ItemName))]
    public string ItemName { get => fields.ItemName[this]; set => fields.ItemName[this] = value; }

    //[DisplayName("Currency"), Size(5)]
    //public Currency? Curency { get => fields.Curency[this]; set => fields.Curency[this] = value; }

    [DisplayName("Date"), Column("Date_")]
    public DateTime? Date { get => fields.Date[this]; set => fields.Date[this] = value; }

    [DisplayName("Total Price"), Size(18), Scale(2), ReadOnly(true)]
    public decimal? TotalPrice { get => fields.TotalPrice[this]; set => fields.TotalPrice[this] = value; }

    [DisplayName("Kdv"), Column("KDV"), Size(15), ReadOnly(true)]
    public string Kdv { get => fields.Kdv[this]; set => fields.Kdv[this] = value; }

    [DisplayName("Unit"), Size(15), ReadOnly(true)]
    public string Unit { get => fields.Unit[this]; set => fields.Unit[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field OfferId;
        public DecimalField Quantity;
        public DecimalField Price;
        public StringField Description;
        public Int32Field ItemId;
        public StringField ItemName;
        //public EnumField<Currency> Curency;
        public DateTimeField Date;
        public DecimalField TotalPrice;
        public StringField Kdv;
        public StringField Unit;

    }
}