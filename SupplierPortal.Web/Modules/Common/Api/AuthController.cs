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
        public IActionResult GenerateLoginLink([FromBody] LoginUser user, [FromQuery] string baseUrl)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            // Assuming _authService.Login has a synchronous counterpart
            if (_authService.Login(user).Result) // Or use .GetAwaiter().GetResult() if .Result is not suitable
            {
                var tokenString = _authService.GenerateTokenString(user);

                // Construct the URL using the base URL from the parameter
                var loginLink = $"{baseUrl}/api/Auth/LoginWithToken?token={tokenString.Token}";

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
            HttpContext.Session.SetString("OfferId", validateResponse.OfferId);
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);

            return Redirect("/Market/Request#new");
        }

    }
}

