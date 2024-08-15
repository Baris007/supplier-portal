using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SupplierPortal.Market.OfferDetailRow;

namespace SupplierPortal.Market;

public interface IOfferDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class OfferDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IOfferDetailDeleteHandler
{
    public OfferDetailDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}