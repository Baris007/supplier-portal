using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace MovieTutorial.MovieDB;

public partial class OfferODGridAttribute : CustomEditorAttribute
{
    public const string Key = "MovieTutorial.MovieDB.OfferODGrid";

    public OfferODGridAttribute()
        : base(Key)
    {
    }
}