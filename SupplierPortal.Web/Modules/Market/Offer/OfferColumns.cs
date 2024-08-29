using MovieTutorial.MovieDB;
using Serenity.ComponentModel;
using SupplierPortal.Market.Enum;
using System.ComponentModel;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.Offer")]
[BasedOnRow(typeof(OfferRow), CheckNames = true)]
public class OfferColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    [Visible(false)]    
    public int Id { get; set; }
    //[EditLink]
    //public State State { get; set; }
    [EditLink]
    public DateTime OfferDate { get; set; }
    [EditLink]
    public DateTime ValueDate { get; set; }

}