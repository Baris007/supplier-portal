using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Market.OfferRow>;
using MyRow = SupplierPortal.Market.OfferRow;

namespace SupplierPortal.Market;

public interface IOfferListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class OfferListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IOfferListHandler
{
    public OfferListHandler(IRequestContext context)
            : base(context)
    {
    }
}