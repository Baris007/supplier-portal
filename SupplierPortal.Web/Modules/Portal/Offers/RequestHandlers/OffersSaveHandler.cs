using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Portal.OffersRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Portal.OffersRow;

namespace SupplierPortal.Portal;

public interface IOffersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class OffersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOffersSaveHandler
{
    public OffersSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}