namespace SupplierPortal.Web.Modules.Common.Api
{
    using System.Threading.Tasks;

    public interface IAuthService
    {
        TokenResponse GenerateTokenString(LoginUser user);
        Task<bool> Login(LoginUser user);
    }
}
