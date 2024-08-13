using MyRequest = SupplierPortal.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Administration.UserRow>;
using MyRow = SupplierPortal.Administration.UserRow;

namespace SupplierPortal.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}