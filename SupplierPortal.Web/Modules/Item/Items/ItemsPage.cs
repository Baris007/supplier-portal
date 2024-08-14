using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Item.Pages;

[PageAuthorize(typeof(ItemsRow))]
public class ItemsPage : Controller
{
    [Route("Item/Items")]
    public ActionResult Index()
    {
        return this.GridPage("@/Item/Items/ItemsPage",
            ItemsRow.Fields.PageTitle());
    }
}