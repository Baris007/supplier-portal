namespace SupplierPortal.Web.Modules.Common.Api
{
    using SupplierPortal.Administration;
    using System.Threading.Tasks;

    public interface IAuthService
    {
        TokenResponse GenerateTokenString(LoginUser user);
        Task<bool> Login(LoginUser user);
        ValidateTokenResponse ValidateToken(string token); // Add this method
    }
}
