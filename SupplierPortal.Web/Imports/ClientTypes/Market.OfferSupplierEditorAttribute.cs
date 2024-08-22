﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SupplierPortal.Market;

public partial class OfferSupplierEditorAttribute : CustomEditorAttribute
{
    public const string Key = "SupplierPortal.Market.OfferSupplierEditor";

    public OfferSupplierEditorAttribute()
        : base(Key)
    {
    }
}