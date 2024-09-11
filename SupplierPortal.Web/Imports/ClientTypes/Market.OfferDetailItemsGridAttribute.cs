using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SupplierPortal.Market;

public partial class OfferDetailItemsGridAttribute : CustomEditorAttribute
{
    public const string Key = "SupplierPortal.Market.OfferDetailItemsGrid";

    public OfferDetailItemsGridAttribute()
        : base(Key)
    {
    }
}