using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SupplierPortal.Market.Columns;
using SupplierPortal.Market.Enum;
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

    [MasterDetailRelation(foreignKey: nameof(OfferSupplierRow.OfferId), ColumnsType = typeof(OfferSupplierColumns))]
    [DisplayName("Supplier List")]
    public List<OfferSupplierRow> CompanyName { get => fields.CompanyName[this]; set => fields.CompanyName[this] = value; }

    [DisplayName("State"), ReadOnly(true), DefaultValue(1)]
    public State? State { get => fields.State[this]; set => fields.State[this] = value; }

    [DisplayName("Email")]
    public string Email { get => fields.Email[this]; set => fields.Email[this] = value; }

    [MasterDetailRelation(foreignKey: nameof(OfferDetailRow.OfferId), ColumnsType = typeof(OfferDetailColumns))]
    [DisplayName("Detail")]
    public List<OfferDetailRow> Detail { get => fields.Detail[this]; set => fields.Detail[this] = value; }

    [DisplayName("OfferDate"), Column("OfferDate"), DefaultValue("NOW"), ReadOnly(true)]
    public DateTime? OfferDate { get => fields.OfferDate[this]; set => fields.OfferDate[this] = value; }

    [DisplayName("ValueDate"), Column("ValueDate"), ReadOnly(true)]
    public DateTime? ValueDate { get => fields.ValueDate[this]; set => fields.ValueDate[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public RowListField<OfferSupplierRow> CompanyName;
        public EnumField<State> State;
        public RowListField<OfferDetailRow> Detail;
        public StringField Email;
        public DateTimeField OfferDate;
        public DateTimeField ValueDate;


    }

}