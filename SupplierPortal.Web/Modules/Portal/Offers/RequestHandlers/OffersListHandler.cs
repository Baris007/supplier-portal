using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Portal.OffersRow>;
using MyRow = SupplierPortal.Portal.OffersRow;

namespace SupplierPortal.Portal;

public interface IOffersListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class OffersListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IOffersListHandler
{
    public OffersListHandler(IRequestContext context)
            : base(context)
    {
    }
}