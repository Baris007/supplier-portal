using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Market.RequestRow>;
using MyRow = SupplierPortal.Market.RequestRow;

namespace SupplierPortal.Market;

public interface IRequestRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class RequestRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IRequestRetrieveHandler
{
    public RequestRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}