using MovieTutorial.MovieDB;
using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.OfferSupplier")]
[BasedOnRow(typeof(OfferSupplierRow), CheckNames = true)]
public class OfferSupplierColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    [Visible(false)]
    public int Id { get; set; }
    [Visible(false)]
    public int SupplierId { get; set; }
    [EditLink]
    public string CompanyName { get; set; }
    public string Email { get; set; }
    public string OfficalName { get; set; }
    public string OfficalSurname { get; set; }
    public string CallNumber { get; set; }
    [Visible(false)]
    public int OfferId { get; set; }
}