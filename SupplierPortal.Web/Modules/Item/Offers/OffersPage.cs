using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Item.Pages;

[PageAuthorize(typeof(OffersRow))]
public class OffersPage : Controller
{
    [Route("Item/Offers")]
    public ActionResult Index()
    {
        return this.GridPage("@/Item/Offers/OffersPage",
            OffersRow.Fields.PageTitle());
    }
}