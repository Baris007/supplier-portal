using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Inventory.Pages;

[PageAuthorize(typeof(ItemRow))]
public class ItemPage : Controller
{
    [Route("Inventory/Item")]
    public ActionResult Index()
    {
        return this.GridPage("@/Inventory/Item/ItemPage",
            ItemRow.Fields.PageTitle());
    }
}