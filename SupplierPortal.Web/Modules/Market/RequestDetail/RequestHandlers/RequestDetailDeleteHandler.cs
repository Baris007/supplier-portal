using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SupplierPortal.Market.RequestDetailRow;

namespace SupplierPortal.Market;

public interface IRequestDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class RequestDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IRequestDetailDeleteHandler
{
    public RequestDetailDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}