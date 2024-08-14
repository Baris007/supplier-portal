using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Item.OffersRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Item.OffersRow;

namespace SupplierPortal.Item;

public interface IOffersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class OffersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOffersSaveHandler
{
    public OffersSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}