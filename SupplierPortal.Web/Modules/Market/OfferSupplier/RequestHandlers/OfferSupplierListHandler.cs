using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Market.OfferSupplierRow>;
using MyRow = SupplierPortal.Market.OfferSupplierRow;

namespace SupplierPortal.Market;

public interface IOfferSupplierListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class OfferSupplierListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IOfferSupplierListHandler
{
    public OfferSupplierListHandler(IRequestContext context)
            : base(context)
    {
    }
}