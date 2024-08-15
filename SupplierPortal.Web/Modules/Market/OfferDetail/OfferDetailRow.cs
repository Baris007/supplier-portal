using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace SupplierPortal.Market;

[ConnectionKey("Default"), Module("Market"), TableName("OfferDetail")]
[DisplayName("Offer Detail"), InstanceName("Offer Detail")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class OfferDetailRow : Row<OfferDetailRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Offer Id")]
    public int? OfferId { get => fields.OfferId[this]; set => fields.OfferId[this] = value; }

    [DisplayName("Quantity"), Size(18), Scale(2)]
    public decimal? Quantity { get => fields.Quantity[this]; set => fields.Quantity[this] = value; }

    [DisplayName("Description"), Size(500), QuickSearch, NameProperty]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }
    

    [DisplayName("Price"), Size(18), Scale(5)]
    public decimal? Price { get => fields.Price[this]; set => fields.Price[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field OfferId;
        public DecimalField Quantity;
        public StringField Description;
        
        public DecimalField Price;

    }
}