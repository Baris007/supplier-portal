using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SupplierPortal.Market;

public partial class SupplierEditorAttribute : CustomEditorAttribute
{
    public const string Key = "SupplierPortal.Market.SupplierEditor";

    public SupplierEditorAttribute()
        : base(Key)
    {
    }
}