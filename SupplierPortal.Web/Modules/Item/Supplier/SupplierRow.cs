using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace SupplierPortal.Item;

[ConnectionKey("Default"), Module("Item"), TableName("Supplier")]
[DisplayName("Supplier"), InstanceName("Supplier")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class SupplierRow : Row<SupplierRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Company Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string CompanyName { get => fields.CompanyName[this]; set => fields.CompanyName[this] = value; }

    [DisplayName("Email"), Size(50), NotNull]
    public string Email { get => fields.Email[this]; set => fields.Email[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField CompanyName;
        public StringField Email;

    }
}