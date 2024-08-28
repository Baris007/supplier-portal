using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Market.RequestRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Market.RequestRow;

namespace SupplierPortal.Market;

public interface IRequestSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class RequestSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRequestSaveHandler
{
    public RequestSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}