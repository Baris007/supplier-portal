using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace SupplierPortal.Items;

[ConnectionKey("Default"), Module("Items"), TableName("Item")]
[DisplayName("Item"), InstanceName("Item")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class ItemRow : Row<ItemRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Item Id"), NotNull]
    public int? ItemId { get => fields.ItemId[this]; set => fields.ItemId[this] = value; }

    [DisplayName("Item Name"), Size(1000), QuickSearch, NameProperty]
    public string ItemName { get => fields.ItemName[this]; set => fields.ItemName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field ItemId;
        public StringField ItemName;

    }
}