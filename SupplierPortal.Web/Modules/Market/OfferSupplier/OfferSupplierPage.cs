using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Market.Pages;

[PageAuthorize(typeof(OfferSupplierRow))]
public class OfferSupplierPage : Controller
{
    [Route("Market/OfferSupplier")]
    public ActionResult Index()
    {
        return this.GridPage("@/Market/OfferSupplier/OfferSupplierPage",
            OfferSupplierRow.Fields.PageTitle());
    }
}