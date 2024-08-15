using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Market.Pages;

[PageAuthorize(typeof(SupplierRow))]
public class SupplierPage : Controller
{
    [Route("Market/Supplier")]
    public ActionResult Index()
    {
        return this.GridPage("@/Market/Supplier/SupplierPage",
            SupplierRow.Fields.PageTitle());
    }
}