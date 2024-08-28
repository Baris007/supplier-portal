using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SupplierPortal.ScheduledEmail.Pages;

[PageAuthorize(typeof(EmailRow))]
public class EmailPage : Controller
{
    [Route("ScheduledEmail/Email")]
    public ActionResult Index()
    {
        return this.GridPage("@/ScheduledEmail/Email/EmailPage",
            EmailRow.Fields.PageTitle());
    }
}