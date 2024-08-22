using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SupplierPortal.Market.OfferSupplierRow;

namespace SupplierPortal.Market;

public interface IOfferSupplierDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class OfferSupplierDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IOfferSupplierDeleteHandler
{
    public OfferSupplierDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}