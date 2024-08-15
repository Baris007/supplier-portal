using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Inventory.ItemRow>;
using MyRow = SupplierPortal.Inventory.ItemRow;

namespace SupplierPortal.Inventory;

public interface IItemListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class ItemListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IItemListHandler
{
    public ItemListHandler(IRequestContext context)
            : base(context)
    {
    }
}