using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Market.OfferSupplierRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Market.OfferSupplierRow;

namespace SupplierPortal.Market;

public interface IOfferSupplierSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class OfferSupplierSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOfferSupplierSaveHandler
{
    public OfferSupplierSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}