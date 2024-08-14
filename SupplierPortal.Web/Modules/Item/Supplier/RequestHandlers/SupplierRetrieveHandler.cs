using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Item.SupplierRow>;
using MyRow = SupplierPortal.Item.SupplierRow;

namespace SupplierPortal.Item;

public interface ISupplierRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class SupplierRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierRetrieveHandler
{
    public SupplierRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}