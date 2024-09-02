using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Market.Pages;

[PageAuthorize(typeof(RequestDetailRow))]
public class RequestDetailPage : Controller
{
    [Route("Market/RequestDetail")]
    public ActionResult Index()
    {
        return this.GridPage("@/Market/RequestDetail/RequestDetailPage",
            RequestDetailRow.Fields.PageTitle());
    }
}