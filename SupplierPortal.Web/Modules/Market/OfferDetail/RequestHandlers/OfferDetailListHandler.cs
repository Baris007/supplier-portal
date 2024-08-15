using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Market.OfferDetailRow>;
using MyRow = SupplierPortal.Market.OfferDetailRow;

namespace SupplierPortal.Market;

public interface IOfferDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class OfferDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IOfferDetailListHandler
{
    public OfferDetailListHandler(IRequestContext context)
            : base(context)
    {
    }
}