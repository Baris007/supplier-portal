using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace SupplierPortal.ScheduledEmail;

[ConnectionKey("Default"), Module("ScheduledEmail"), TableName("ScheduledEmail")]
[DisplayName("Email"), InstanceName("Email")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
public sealed class EmailRow : Row<EmailRow.RowFields>, IIdRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Offer Supplier Id")]
    public int? OfferSupplierId { get => fields.OfferSupplierId[this]; set => fields.OfferSupplierId[this] = value; }

    [DisplayName("Offer Id")]
    public int? OfferId { get => fields.OfferId[this]; set => fields.OfferId[this] = value; }

    [DisplayName("Is Sended")]
    public bool? IsSended { get => fields.IsSended[this]; set => fields.IsSended[this] = value; }

    [DisplayName("Is Auto Sended")]
    public bool? IsAutoSended { get => fields.IsAutoSended[this]; set => fields.IsAutoSended[this] = value; }



    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field OfferSupplierId;
        public Int32Field OfferId;
        public BooleanField IsSended;
        public BooleanField IsAutoSended;

    }
}