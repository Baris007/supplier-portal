using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Market.OfferRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Market.OfferRow;

namespace SupplierPortal.Market;

public interface IOfferSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class OfferSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOfferSaveHandler
{
    public OfferSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}