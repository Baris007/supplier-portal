using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SupplierPortal.Market;

public partial class RequestDetailEditorAttribute : CustomEditorAttribute
{
    public const string Key = "SupplierPortal.Market.RequestDetailEditor";

    public RequestDetailEditorAttribute()
        : base(Key)
    {
    }
}