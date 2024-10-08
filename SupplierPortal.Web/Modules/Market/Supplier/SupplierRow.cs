using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace SupplierPortal.Market;

[ConnectionKey("Default"), Module("Market"), TableName("Supplier")]
[DisplayName("Supplier"), InstanceName("Supplier")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript(Permission = "*")]
public sealed class SupplierRow : Row<SupplierRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Company Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string CompanyName { get => fields.CompanyName[this]; set => fields.CompanyName[this] = value; }

    [DisplayName("Email"), Size(50), NotNull , LookupInclude]
    public string Email { get => fields.Email[this]; set => fields.Email[this] = value; }

    [DisplayName("Offical Name"), Size(15), LookupInclude]
    public string OfficalName { get => fields.OfficalName[this]; set => fields.OfficalName[this] = value; }

    [DisplayName("Offical Surname"), Size(15), LookupInclude]
    public string OfficalSurname { get => fields.OfficalSurname[this]; set => fields.OfficalSurname[this] = value; }

    [DisplayName("Call Number"), Size(10), LookupInclude]
    public string CallNumber { get => fields.CallNumber[this]; set => fields.CallNumber[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField CompanyName;
        public StringField Email;
        public StringField OfficalName;
        public StringField OfficalSurname;
        public StringField CallNumber;

    }
}