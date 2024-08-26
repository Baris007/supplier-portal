using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace MovieTutorial.MovieDB;

public partial class OfferSuplierEditorAttribute : CustomEditorAttribute
{
    public const string Key = "MovieTutorial.MovieDB.OfferSuplierEditor";

    public OfferSuplierEditorAttribute()
        : base(Key)
    {
    }
}