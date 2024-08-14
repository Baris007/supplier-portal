using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Portal.OffersRow>;
using MyRow = SupplierPortal.Portal.OffersRow;

namespace SupplierPortal.Portal;

public interface IOffersRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class OffersRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IOffersRetrieveHandler
{
    public OffersRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}