using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Portal.SupplierRow>;
using MyRow = SupplierPortal.Portal.SupplierRow;

namespace SupplierPortal.Portal;

public interface ISupplierListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class SupplierListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierListHandler
{
    public SupplierListHandler(IRequestContext context)
            : base(context)
    {
    }
}