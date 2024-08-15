using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SupplierPortal.Market.SupplierRow;

namespace SupplierPortal.Market;

public interface ISupplierDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class SupplierDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierDeleteHandler
{
    public SupplierDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}