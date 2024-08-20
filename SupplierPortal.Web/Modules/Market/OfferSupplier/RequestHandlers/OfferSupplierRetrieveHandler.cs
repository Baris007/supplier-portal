using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Market.OfferSupplierRow>;
using MyRow = SupplierPortal.Market.OfferSupplierRow;

namespace SupplierPortal.Market;

public interface IOfferSupplierRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class OfferSupplierRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IOfferSupplierRetrieveHandler
{
    public OfferSupplierRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}