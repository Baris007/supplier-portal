using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Market.OfferRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Market.OfferRow;

namespace SupplierPortal.Market;

public interface IOfferSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class OfferSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOfferSaveHandler
{
    private readonly IServiceResolver<IOfferSupplierDeleteHandler> OffersupplierDelete;
    private readonly IServiceResolver<IOfferSupplierSaveHandler> OffersupplierSave;

    private readonly IServiceResolver<IOfferDetailDeleteHandler> OfferDetailDelete;
    private readonly IServiceResolver<IOfferDetailSaveHandler> OfferDetailSave;

    public OfferSaveHandler(IRequestContext context)
        : base(context)
    {
    }
}

