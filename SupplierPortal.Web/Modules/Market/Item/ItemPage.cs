using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Market.Pages;

[PageAuthorize(typeof(ItemRow))]
public class ItemPage : Controller
{
    [Route("Market/Item")]
    public ActionResult Index()
    {
        return this.GridPage("@/Market/Item/ItemPage",
            ItemRow.Fields.PageTitle());
    }
}