namespace SupplierPortal.Web.Modules.Common.Api
{ 
    using Microsoft.AspNetCore.Mvc; 

    [Route("api/[controller]")]
    [ApiController] 
    [IgnoreAntiforgeryToken]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "SupplierPortal Test Post";
        }
    }
}
