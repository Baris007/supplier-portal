namespace SupplierPortal.Web.Modules.Common.Api
{
    using Microsoft.AspNetCore.Authentication;
    using Microsoft.AspNetCore.Authentication.Cookies;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Abstractions;
    using System.Threading.Tasks;
    using System.IO;
    using SupplierPortal.Administration;
    using Microsoft.AspNetCore.DataProtection;
    using SupplierPortal.Modules.Membership;




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

        [HttpPost("SendResetEmail")]
        public ActionResult SendResetEmail([FromBody] ResetEmailRequest request,
        [FromServices] IEmailSender emailSender,
        [FromServices] ISiteAbsoluteUrl siteAbsoluteUrl)
        {
            return this.UseConnection("Default", connection =>
            {
                if (request is null || request.UserId == null)
                    throw new ArgumentNullException(nameof(request));

                var user = connection.TryFirst<UserRow>(UserRow.Fields.UserId == new ValueCriteria(request.UserId));    
                if (user == null)
                    throw new ValidationError("CantFindUserWithId", "Cannot find user with the provided ID.");

                byte[] bytes;
                using (var ms = new MemoryStream())
                using (var bw = new BinaryWriter(ms))
                {
                    bw.Write(DateTime.UtcNow.AddHours(3).ToBinary());
                    bw.Write(user.UserId.Value);
                    bw.Flush();
                    bytes = ms.ToArray();
                }

                var token = Convert.ToBase64String(HttpContext.RequestServices.GetDataProtector("ResetPassword").Protect(bytes));

                var externalUrl = siteAbsoluteUrl.GetExternalUrl();
                var resetLink = UriHelper.Combine(externalUrl, "Account/ResetPassword?t=");
                resetLink += Uri.EscapeDataString(token);

                var emailModel = new ResetPasswordEmailModel
                {
                    //Username = user.Username,
                    DisplayName = user.DisplayName,
                    ResetLink = resetLink
                };

                var emailSubject = "Reset your password";
                var emailBody = TemplateHelper.RenderViewToString(HttpContext.RequestServices,
                "/Modules/Membership/Account/ResetPasswordEmail", emailModel);


                if (emailSender == null)
                    throw new ArgumentNullException(nameof(emailSender));

                emailSender.Send(subject: emailSubject, body: emailBody, mailTo: user.Email);

                return new ServiceResponse();
            });
        }

        // Define a request model to accept userId
        public class ResetEmailRequest
        {
            public int? UserId { get; set; }
        }


    }
}

