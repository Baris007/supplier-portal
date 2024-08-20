using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace SupplierPortal.Market;

[ConnectionKey("Default"), Module("Market"), TableName("Offer")]
[DisplayName("Offer"), InstanceName("Offer")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
public sealed class OfferRow : Row<OfferRow.RowFields>, IIdRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }
    [DisplayName("Supplier"), MasterDetailRelation("Id")]
    public List<SupplierRow> Supplier { get => fields.Supplier[this]; set => fields.Supplier[this] = value; }

    [DisplayName("State")]
    public short? State { get => fields.State[this]; set => fields.State[this] = value; }
    [DisplayName("Detail"), MasterDetailRelation("OfferId")]
    public List<OfferDetailRow> Detail { get => fields.Detail[this]; set => fields.Detail[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public RowListField<SupplierRow> Supplier;
        public Int16Field State;
        public RowListField<OfferDetailRow> Detail;

    }
}