using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;
using static Serenity.Demo.Northwind.MVC.Views;

namespace SupplierPortal.Market;

[ConnectionKey("Default"), Module("Market"), TableName("OfferSupplier")]
[DisplayName("Offer Supplier"), InstanceName("Offer Supplier")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[LookupScript]
//[LookupScript(Permission = "*", Expiration = 1)]
public sealed class OfferSupplierRow : Row<OfferSupplierRow.RowFields>, IIdRow
{
    const string jSupplier = nameof(jSupplier);
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Supplier Name"), NotNull, ForeignKey(typeof(SupplierRow)), LeftJoin(jSupplier), TextualField(nameof(CompanyName))]
    [LookupEditor(typeof(SupplierRow), Async = true)]
    public int? SupplierId { get => fields.SupplierId[this]; set => fields.SupplierId[this] = value; }

    [DisplayName("Offer Id")]
    public int? OfferId { get => fields.OfferId[this]; set => fields.OfferId[this] = value; }

    [DisplayName("Supplier Name"), Origin(jSupplier, nameof(SupplierRow.CompanyName))]
    public string CompanyName { get => fields.CompanyName[this]; set => fields.CompanyName[this] = value; }

    [DisplayName("Email"), ReadOnly(true), Origin(jSupplier, nameof(SupplierRow.Email))]
    public string Email { get => fields.Email[this]; set => fields.Email[this] = value; }

    [DisplayName("Offical Name"), ReadOnly(true), Origin(jSupplier, nameof(SupplierRow.OfficalName))]
    public string OfficalName { get => fields.OfficalName[this]; set => fields.OfficalName[this] = value; }

    [DisplayName("Offical Surname"), ReadOnly(true), Origin(jSupplier, nameof(SupplierRow.OfficalSurname))]
    public string OfficalSurname { get => fields.OfficalSurname[this]; set => fields.OfficalSurname[this] = value; }

    [DisplayName("Call Number"), ReadOnly(true), Origin(jSupplier, nameof(SupplierRow.CallNumber))]
    public string CallNumber { get => fields.CallNumber[this]; set => fields.CallNumber[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field SupplierId;
        public Int32Field OfferId;
        public StringField CompanyName;
        public StringField Email;
        public StringField OfficalName;
        public StringField OfficalSurname;
        public StringField CallNumber;

    }
}