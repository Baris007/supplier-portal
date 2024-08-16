using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace SupplierPortal.Market;

[ConnectionKey("Default"), Module("Market"), TableName("Offer")]
[DisplayName("Offer"), InstanceName("Offer")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class OfferRow : Row<OfferRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Supplier"), MasterDetailRelation("CompanyName")]
    public List<SupplierRow> Supplier { get => fields.Supplier[this]; set => fields.Supplier[this] = value; }

    [DisplayName("Item Id"), NotNull]
    public int? ItemId { get => fields.ItemId[this]; set => fields.ItemId[this] = value; }

    [DisplayName("Supplier Id"), NotNull]
    public int? SupplierId { get => fields.SupplierId[this]; set => fields.SupplierId[this] = value; }

    [DisplayName("Email"), Size(50), NotNull, QuickSearch, NameProperty]
    public string Email { get => fields.Email[this]; set => fields.Email[this] = value; }

    [DisplayName("State")]
    public short? State { get => fields.State[this]; set => fields.State[this] = value; }

    [DisplayName("Detail"), MasterDetailRelation("OfferId")]
    public List<OfferDetailRow> Detail { get => fields.Detail[this]; set => fields.Detail[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public RowListField<SupplierRow> Supplier;
        public Int32Field ItemId;
        public Int32Field SupplierId;
        public StringField Email;
        public Int16Field State;
        public RowListField<OfferDetailRow> Detail;
    }
}