using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Market.OfferRow>;
using MyRow = SupplierPortal.Market.OfferRow;

namespace SupplierPortal.Market;

public interface IOfferRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class OfferRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IOfferRetrieveHandler
{
    public OfferRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}