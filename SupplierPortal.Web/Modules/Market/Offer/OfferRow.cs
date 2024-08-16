<<<<<<< HEAD
﻿using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;
using System.IO;
=======
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;
>>>>>>> Zeki

namespace SupplierPortal.Market;

[ConnectionKey("Default"), Module("Market"), TableName("Offer")]
[DisplayName("Offer"), InstanceName("Offer")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class OfferRow : Row<OfferRow.RowFields>, IIdRow, INameRow
{
<<<<<<< HEAD
    const string jItem = nameof(jItem);
    const string jSupplier = nameof(jSupplier);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Amount"), NotNull]
    public short? Amount { get => fields.Amount[this]; set => fields.Amount[this] = value; }

    [DisplayName("Item Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string ItemName { get => fields.ItemName[this]; set => fields.ItemName[this] = value; }

    [DisplayName("Company Name"), Size(50), NotNull]
    public string CompanyName { get => fields.CompanyName[this]; set => fields.CompanyName[this] = value; }

    [DisplayName("Email"), Size(50), NotNull]
    public string Email { get => fields.Email[this]; set => fields.Email[this] = value; }

    [DisplayName("State"), Size(1)]
    public Stream State { get => fields.State[this]; set => fields.State[this] = value; }

    [DisplayName("Item"), NotNull, ForeignKey(typeof(ItemRow)), LeftJoin(jItem), TextualField(nameof(ItemItemName))]
    [ServiceLookupEditor(typeof(ItemRow))]
    public int? ItemId { get => fields.ItemId[this]; set => fields.ItemId[this] = value; }

    [DisplayName("Supplier"), NotNull, ForeignKey(typeof(SupplierRow)), LeftJoin(jSupplier), TextualField(nameof(SupplierCompanyName))]
    [ServiceLookupEditor(typeof(SupplierRow))]
    public int? SupplierId { get => fields.SupplierId[this]; set => fields.SupplierId[this] = value; }

    [DisplayName("Item Item Name"), Origin(jItem, nameof(ItemRow.ItemName))]
    public string ItemItemName { get => fields.ItemItemName[this]; set => fields.ItemItemName[this] = value; }

    [DisplayName("Supplier Company Name"), Origin(jSupplier, nameof(SupplierRow.CompanyName))]
    public string SupplierCompanyName { get => fields.SupplierCompanyName[this]; set => fields.SupplierCompanyName[this] = value; }
=======
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
>>>>>>> Zeki

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
<<<<<<< Updated upstream
<<<<<<< HEAD
        public Int16Field Amount;
        public StringField ItemName;
        public StringField CompanyName;
        public StringField Email;
        public StreamField State;
        public Int32Field ItemId;
        public Int32Field SupplierId;

        public StringField ItemItemName;
        public StringField SupplierCompanyName;
=======
=======
        public RowListField<SupplierRow> Supplier;
>>>>>>> Stashed changes
        public Int32Field ItemId;
        public Int32Field SupplierId;
        public StringField Email;
        public Int16Field State;
        public RowListField<OfferDetailRow> Detail;
>>>>>>> Zeki
    }
}