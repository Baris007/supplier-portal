using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Market.OfferDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Market.OfferDetailRow;

namespace SupplierPortal.Market;

public interface IOfferDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class OfferDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOfferDetailSaveHandler
{
    public OfferDetailSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}