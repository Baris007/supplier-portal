using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SupplierPortal.Inventory.ItemRow;

namespace SupplierPortal.Inventory;

public interface IItemDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class ItemDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IItemDeleteHandler
{
    public ItemDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}