using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SupplierPortal.İtem.ItemsRow;

namespace SupplierPortal.İtem;

public interface IItemsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class ItemsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IItemsDeleteHandler
{
    public ItemsDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}