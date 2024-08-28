using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Market.RequestRow>;
using MyRow = SupplierPortal.Market.RequestRow;

namespace SupplierPortal.Market;

public interface IRequestListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class RequestListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRequestListHandler
{
    public RequestListHandler(IRequestContext context)
            : base(context)
    {
    }
}