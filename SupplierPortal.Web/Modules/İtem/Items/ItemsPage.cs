using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.İtem.Pages;

[PageAuthorize(typeof(ItemsRow))]
public class ItemsPage : Controller
{
    [Route("İtem/Items")]
    public ActionResult Index()
    {
        return this.GridPage("@/İtem/Items/ItemsPage",
            ItemsRow.Fields.PageTitle());
    }
}