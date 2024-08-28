using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Market.Pages;

[PageAuthorize(typeof(RequestRow))]
public class RequestPage : Controller
{
    [Route("Market/Request")]
    public ActionResult Index()
    {
        return this.GridPage("@/Market/Request/RequestPage",
            RequestRow.Fields.PageTitle());
    }
}