using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SupplierPortal.Market.RequestRow;

namespace SupplierPortal.Market;

public interface IRequestDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class RequestDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IRequestDeleteHandler
{
    public RequestDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}