﻿using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace SupplierPortal.İtem;

[ConnectionKey("Default"), Module("İtem"), TableName("Items")]
[DisplayName("Items"), InstanceName("Items")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class ItemsRow : Row<ItemsRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Item Code"), NotNull]
    public short? ItemCode { get => fields.ItemCode[this]; set => fields.ItemCode[this] = value; }

    [DisplayName("Item Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string ItemName { get => fields.ItemName[this]; set => fields.ItemName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int16Field ItemCode;
        public StringField ItemName;

    }
}