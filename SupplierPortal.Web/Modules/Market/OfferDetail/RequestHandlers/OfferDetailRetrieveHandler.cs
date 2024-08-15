using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Market.OfferDetailRow>;
using MyRow = SupplierPortal.Market.OfferDetailRow;

namespace SupplierPortal.Market;

public interface IOfferDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class OfferDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IOfferDetailRetrieveHandler
{
    public OfferDetailRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}