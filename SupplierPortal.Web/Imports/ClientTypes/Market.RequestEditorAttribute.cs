using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SupplierPortal.Market;

public partial class RequestEditorAttribute : CustomEditorAttribute
{
    public const string Key = "SupplierPortal.Market.RequestEditor";

    public RequestEditorAttribute()
        : base(Key)
    {
    }
}