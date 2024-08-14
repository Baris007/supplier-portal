using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Portal.ItemsRow>;
using MyRow = SupplierPortal.Portal.ItemsRow;

namespace SupplierPortal.Portal;

public interface IItemsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IItemsRetrieveHandler
{
    public ItemsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}