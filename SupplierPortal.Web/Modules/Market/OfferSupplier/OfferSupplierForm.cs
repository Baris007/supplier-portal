using MovieTutorial.MovieDB;
using Serenity.ComponentModel;

namespace SupplierPortal.Market.Forms;

[FormScript("Market.OfferSupplier")]
[BasedOnRow(typeof(OfferSupplierRow), CheckNames = true)]
public class OfferSupplierForm
{
    public int SupplierId { get; set; }
    [Visible(false)]
    public int OfferId { get; set; }
    public string Email { get; set; }
    public string OfficalName { get; set; }
    public string OfficalSurname { get; set; }
    public string CallNumber { get; set; }

}