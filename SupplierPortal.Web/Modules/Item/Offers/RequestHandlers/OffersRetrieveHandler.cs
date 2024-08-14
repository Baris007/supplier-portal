using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Item.OffersRow>;
using MyRow = SupplierPortal.Item.OffersRow;

namespace SupplierPortal.Item;

public interface IOffersRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class OffersRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IOffersRetrieveHandler
{
    public OffersRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}