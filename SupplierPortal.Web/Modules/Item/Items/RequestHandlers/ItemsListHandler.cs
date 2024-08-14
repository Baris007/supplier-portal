using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Item.ItemsRow>;
using MyRow = SupplierPortal.Item.ItemsRow;

namespace SupplierPortal.Item;

public interface IItemsListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class ItemsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IItemsListHandler
{
    public ItemsListHandler(IRequestContext context)
            : base(context)
    {
    }
}