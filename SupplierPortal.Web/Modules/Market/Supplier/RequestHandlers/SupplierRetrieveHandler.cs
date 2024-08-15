using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Market.SupplierRow>;
using MyRow = SupplierPortal.Market.SupplierRow;

namespace SupplierPortal.Market;

public interface ISupplierRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class SupplierRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierRetrieveHandler
{
    public SupplierRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}