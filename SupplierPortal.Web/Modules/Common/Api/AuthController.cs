namespace SupplierPortal.Web.Modules.Common.Api
{
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authentication.Cookies;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Abstractions;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    [ApiController]
    [IgnoreAntiforgeryToken]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IUserRetrieveService _userRetriever;
        private readonly IUserClaimCreator _userClaimCreator;

        public AuthController(IAuthService authService, IUserRetrieveService userRetriever, IUserClaimCreator userClaimCreator)
        {
            _authService = authService;
            _userRetriever = userRetriever;
            _userClaimCreator = userClaimCreator;
        }
        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginUser user)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            if (await _authService.Login(user))
            {
                var tokenString = _authService.GenerateTokenString(user);
                return Ok(tokenString);
            }

            return BadRequest();
        }
        [HttpPost("GenerateLoginLink")]
        public async Task<IActionResult> GenerateLoginLink(LoginUser user)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            if (await _authService.Login(user))
            {
                var tokenString = _authService.GenerateTokenString(user);
                var loginLink = Url.Action("LoginWithToken", "Auth", new { token = tokenString.Token }, Request.Scheme);
                return Ok(new { link = loginLink });
            }

            return BadRequest();
        }
        [HttpGet("LoginWithToken")]
        public async Task<IActionResult> LoginWithToken(string token)
        {
            if (string.IsNullOrEmpty(token))
                return BadRequest("Invalid token");
             
            var validateResponse = _authService.ValidateToken(token);
            if (validateResponse == null)
                return Unauthorized();

            var principal = _userClaimCreator.CreatePrincipal(validateResponse.Username, authType: "Token");

            HttpContext.Session.SetString("UserEmail", validateResponse.UserEmail);
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);
             
            return Redirect("/Market/Offer#new");
        }

    }
}
