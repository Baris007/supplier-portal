using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.Item.Pages;

[PageAuthorize(typeof(SupplierRow))]
public class SupplierPage : Controller
{
    [Route("Item/Supplier")]
    public ActionResult Index()
    {
        return this.GridPage("@/Item/Supplier/SupplierPage",
            SupplierRow.Fields.PageTitle());
    }
}