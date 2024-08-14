using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Portal.Pages;

[PageAuthorize(typeof(ItemsRow))]
public class ItemsPage : Controller
{
    [Route("Portal/Items")]
    public ActionResult Index()
    {
        return this.GridPage("@/Portal/Items/ItemsPage",
            ItemsRow.Fields.PageTitle());
    }
}