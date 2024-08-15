using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Market.Pages;

[PageAuthorize(typeof(OfferRow))]
public class OfferPage : Controller
{
    [Route("Market/Offer")]
    public ActionResult Index()
    {
        return this.GridPage("@/Market/Offer/OfferPage",
            OfferRow.Fields.PageTitle());
    }
}