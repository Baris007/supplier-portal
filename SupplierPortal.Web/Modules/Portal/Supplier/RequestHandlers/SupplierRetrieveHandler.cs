using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Portal.SupplierRow>;
using MyRow = SupplierPortal.Portal.SupplierRow;

namespace SupplierPortal.Portal;

public interface ISupplierRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class SupplierRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierRetrieveHandler
{
    public SupplierRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}