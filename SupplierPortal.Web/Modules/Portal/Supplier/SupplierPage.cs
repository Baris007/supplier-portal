using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Portal.Pages;

[PageAuthorize(typeof(SupplierRow))]
public class SupplierPage : Controller
{
    [Route("Portal/Supplier")]
    public ActionResult Index()
    {
        return this.GridPage("@/Portal/Supplier/SupplierPage",
            SupplierRow.Fields.PageTitle());
    }
}