using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Market.RequestDetailRow>;
using MyRow = SupplierPortal.Market.RequestDetailRow;

namespace SupplierPortal.Market;

public interface IRequestDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class RequestDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IRequestDetailRetrieveHandler
{
    public RequestDetailRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}