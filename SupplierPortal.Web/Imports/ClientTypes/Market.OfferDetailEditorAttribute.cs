using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SupplierPortal.Market;

public partial class OfferDetailEditorAttribute : CustomEditorAttribute
{
    public const string Key = "SupplierPortal.Market.OfferDetailEditor";

    public OfferDetailEditorAttribute()
        : base(Key)
    {
    }
}