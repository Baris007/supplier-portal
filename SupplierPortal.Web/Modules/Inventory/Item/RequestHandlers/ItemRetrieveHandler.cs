using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Inventory.ItemRow>;
using MyRow = SupplierPortal.Inventory.ItemRow;

namespace SupplierPortal.Inventory;

public interface IItemRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IItemRetrieveHandler
{
    public ItemRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}