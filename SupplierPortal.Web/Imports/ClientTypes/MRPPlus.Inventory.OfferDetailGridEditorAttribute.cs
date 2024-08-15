using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace MRPPlus.Inventory;

public partial class OfferDetailGridEditorAttribute : CustomEditorAttribute
{
    public const string Key = "MRPPlus.Inventory.BillOfMaterialDetailEditor";

    public OfferDetailGridEditorAttribute()
        : base(Key)
    {
    }
}