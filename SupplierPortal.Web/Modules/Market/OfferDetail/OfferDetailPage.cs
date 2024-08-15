using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Market.Pages;

[PageAuthorize(typeof(OfferDetailRow))]
public class OfferDetailPage : Controller
{
    [Route("Market/OfferDetail")]
    public ActionResult Index()
    {
        return this.GridPage("@/Market/OfferDetail/OfferDetailPage",
            OfferDetailRow.Fields.PageTitle());
    }
}