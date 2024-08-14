using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Items.Pages;

[PageAuthorize(typeof(ItemRow))]
public class ItemPage : Controller
{
    [Route("Items/Item")]
    public ActionResult Index()
    {
        return this.GridPage("@/Items/Item/ItemPage",
            ItemRow.Fields.PageTitle());
    }
}