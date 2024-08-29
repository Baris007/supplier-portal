using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SupplierPortal.Market.OfferRow;

namespace SupplierPortal.Market;

public interface IOfferDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class OfferDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IOfferDeleteHandler
{

    public OfferDeleteHandler(IRequestContext context)

        : base(context)
    {

    }
}