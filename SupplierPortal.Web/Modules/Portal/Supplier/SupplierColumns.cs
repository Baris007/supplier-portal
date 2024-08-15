﻿using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.Portal.Columns;

[ColumnsScript("Portal.Supplier")]
[BasedOnRow(typeof(SupplierRow), CheckNames = true)]
public class SupplierColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string CompanyName { get; set; }
    public string Email { get; set; }
}