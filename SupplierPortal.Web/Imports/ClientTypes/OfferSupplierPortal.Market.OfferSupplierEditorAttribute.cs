using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace OfferSupplierPortal.Market;

public partial class OfferSupplierEditorAttribute : CustomEditorAttribute
{
    public const string Key = "OfferSupplierPortal.Market.OfferSupplierEditor";

    public OfferSupplierEditorAttribute()
        : base(Key)
    {
    }
}