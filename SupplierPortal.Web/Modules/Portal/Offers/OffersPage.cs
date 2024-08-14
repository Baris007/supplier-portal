using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Portal.Pages;

[PageAuthorize(typeof(OffersRow))]
public class OffersPage : Controller
{
    [Route("Portal/Offers")]
    public ActionResult Index()
    {
        return this.GridPage("@/Portal/Offers/OffersPage",
            OffersRow.Fields.PageTitle());
    }
}