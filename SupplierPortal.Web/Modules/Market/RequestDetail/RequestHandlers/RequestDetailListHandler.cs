using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Market.RequestDetailRow>;
using MyRow = SupplierPortal.Market.RequestDetailRow;

namespace SupplierPortal.Market;

public interface IRequestDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class RequestDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRequestDetailListHandler
{
    public RequestDetailListHandler(IRequestContext context)
            : base(context)
    {
    }
}