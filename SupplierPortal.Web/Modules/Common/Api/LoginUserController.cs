//namespace CRM.Web.Modules.Common.Api
//{ 
//    using Microsoft.AspNetCore.Authentication.JwtBearer;
//    using Microsoft.AspNetCore.Authorization;
//    using Microsoft.AspNetCore.Mvc;
//    using Serenity.Data;
//    using SupplierPortal.Administration;
//    using SupplierPortal.Web.Modules.Common.Api;
//    using System;
//    using System.Threading.Tasks;

//    [Route("api/[controller]")]
//    [ApiController]
//    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
//    [IgnoreAntiforgeryToken]
//    public class LoginUserController : ControllerBase
//    {
//        public ISqlConnections sqlConnections { get; set; }
//        public LoginUserController(ISqlConnections _sqlConnections)
//        {
//            sqlConnections = _sqlConnections ?? throw new ArgumentNullException(nameof(_sqlConnections));
//        }
//        [HttpGet("Getsite")]
//        public Task<IActionResult> Get(LoginUser mtestUser)
//        {
//            using var connection = sqlConnections.NewFor<UserRow>();
//            using var uow = new UnitOfWork(connection);
//            {
//                uow.Commit();
//            }
//            return Task.FromResult<IActionResult>(NotFound());
//        }
//    }
//}
