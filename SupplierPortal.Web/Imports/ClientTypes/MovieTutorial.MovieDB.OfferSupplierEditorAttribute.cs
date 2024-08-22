using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace MovieTutorial.MovieDB;

public partial class OfferSupplierEditorAttribute : CustomEditorAttribute
{
    public const string Key = "MovieTutorial.MovieDB.OfferSupplierEditor";

    public OfferSupplierEditorAttribute()
        : base(Key)
    {
    }
}