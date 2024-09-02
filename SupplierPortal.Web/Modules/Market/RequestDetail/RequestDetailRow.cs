﻿using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace SupplierPortal.Market;

[ConnectionKey("Default"), Module("Market"), TableName("RequestDetail")]
[DisplayName("Request Detail"), InstanceName("Request Detail")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class RequestDetailRow : Row<RequestDetailRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Request Id")]
    public int? RequestId { get => fields.RequestId[this]; set => fields.RequestId[this] = value; }

    [DisplayName("Item Name"), Size(50), QuickSearch, NameProperty]
    public string ItemName { get => fields.ItemName[this]; set => fields.ItemName[this] = value; }

    [DisplayName("Quantity"), Size(18), Scale(2)]
    public decimal? Quantity { get => fields.Quantity[this]; set => fields.Quantity[this] = value; }

    [DisplayName("Price"), Size(18)]
    public decimal? Price { get => fields.Price[this]; set => fields.Price[this] = value; }

    [DisplayName("Total Price"), Size(18), Scale(2)]
    public decimal? TotalPrice { get => fields.TotalPrice[this]; set => fields.TotalPrice[this] = value; }

    [DisplayName("Currency")]
    public short? Currency { get => fields.Currency[this]; set => fields.Currency[this] = value; }

    [DisplayName("Description"), Size(10)]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    [DisplayName("Date"), Column("Date_")]
    public DateTime? Date { get => fields.Date[this]; set => fields.Date[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field RequestId;
        public StringField ItemName;
        public DecimalField Quantity;
        public DecimalField Price;
        public DecimalField TotalPrice;
        public Int16Field Currency;
        public StringField Description;
        public DateTimeField Date;

    }
}