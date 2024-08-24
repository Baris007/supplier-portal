namespace SupplierPortal.Web.Modules.Common.Api
{ 
    public class LoginUser
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
    public class TokenResponse
    {
        public string Token { get; set; } 
    }
}
