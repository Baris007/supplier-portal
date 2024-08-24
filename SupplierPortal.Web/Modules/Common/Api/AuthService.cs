namespace SupplierPortal.Web.Modules.Common.Api
{
    using Microsoft.Extensions.Configuration;
    using Microsoft.IdentityModel.Tokens;
    using Serenity.Abstractions;
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;

    public class AuthService : IAuthService
    {
        private readonly IUserPasswordValidator _passwordValidator;
        private readonly IUserRetrieveService _userRetriever;
        private readonly IConfiguration _config;

        public AuthService(IUserPasswordValidator passwordValidator, IUserRetrieveService userRetriever, IConfiguration config)
        {
            _passwordValidator = passwordValidator;
            _userRetriever = userRetriever;
            _config = config;
        }

        public Task<bool> Login(LoginUser request)
        {
            if (request is null)
                return Task.FromResult(false);

            if (string.IsNullOrEmpty(request.Username))
                return Task.FromResult(false);

            if (_passwordValidator is null)
                return Task.FromResult(false);

            if (_userRetriever is null)
                return Task.FromResult(false);

            var username = request.Username;
            var result = _passwordValidator.Validate(ref username, request.Password);
            if (result == PasswordValidationResult.Valid)
            {
                return Task.FromResult(true);
            }
            else
            {
                return Task.FromResult(false);
            }
        }

        public TokenResponse GenerateTokenString(LoginUser user)
        {
            IEnumerable<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Username),
                new Claim(ClaimTypes.Role, "Admin"),
                new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.Now.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64)
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("Jwt:Key").Value));
            var signingCred = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var securityToken = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                issuer: _config.GetSection("Jwt:Issuer").Value,
                audience: _config.GetSection("Jwt:Audience").Value,
                signingCredentials: signingCred);

            string tokenString = new JwtSecurityTokenHandler().WriteToken(securityToken);
            return new TokenResponse() { Token = tokenString };
        }
    }
}
