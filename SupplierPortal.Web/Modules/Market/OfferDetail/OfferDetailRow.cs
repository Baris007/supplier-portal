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
    const string jOffer = nameof(jOffer);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Offer"), Column("OfferID"), ForeignKey(typeof(OfferRow)), LeftJoin(jOffer), TextualField(nameof(OfferEmail))]
    [ServiceLookupEditor(typeof(OfferRow))]
    public int? OfferId { get => fields.OfferId[this]; set => fields.OfferId[this] = value; }

    [DisplayName("Quantity"), Size(18), Scale(2)]
    public decimal? Quantity { get => fields.Quantity[this]; set => fields.Quantity[this] = value; }

    [DisplayName("Description"), Size(500), QuickSearch, NameProperty]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    [DisplayName("Status Date")]
    public DateTime? StatusDate { get => fields.StatusDate[this]; set => fields.StatusDate[this] = value; }

    [DisplayName("Price"), Size(18), Scale(5)]
    public decimal? Price { get => fields.Price[this]; set => fields.Price[this] = value; }

    [DisplayName("Offer Email"), Origin(jOffer, nameof(OfferRow.Email))]
    public string OfferEmail { get => fields.OfferEmail[this]; set => fields.OfferEmail[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field OfferId;
        public DecimalField Quantity;
        public StringField Description;
        public DateTimeField StatusDate;
        public DecimalField Price;

        public StringField OfferEmail;
    }
}