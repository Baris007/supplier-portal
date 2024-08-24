using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace SupplierPortal.Market;

[ConnectionKey("Default"), Module("Market"), TableName("OfferSupplier")]
[DisplayName("Offer Supplier"), InstanceName("Offer Supplier")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[LookupScript]
public sealed class OfferSupplierRow : Row<OfferSupplierRow.RowFields>, IIdRow
{
    const string jSupplier = nameof(jSupplier);
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Company Name"), ForeignKey(typeof(SupplierRow))]
    [LookupEditor(typeof(SupplierRow), Async = true)]
    public int? SupplierId { get => fields.SupplierId[this]; set => fields.SupplierId[this] = value; }

    [DisplayName("Offer Id")]
    public int? OfferId { get => fields.OfferId[this]; set => fields.OfferId[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field SupplierId;
        public Int32Field OfferId;
    }
}