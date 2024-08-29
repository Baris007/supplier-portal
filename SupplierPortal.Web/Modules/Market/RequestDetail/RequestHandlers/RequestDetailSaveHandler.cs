using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Market.RequestDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Market.RequestDetailRow;

namespace SupplierPortal.Market;

public interface IRequestDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class RequestDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRequestDetailSaveHandler
{
    public RequestDetailSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}