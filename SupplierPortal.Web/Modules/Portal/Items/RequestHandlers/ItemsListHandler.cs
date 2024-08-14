using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Portal.ItemsRow>;
using MyRow = SupplierPortal.Portal.ItemsRow;

namespace SupplierPortal.Portal;

public interface IItemsListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class ItemsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IItemsListHandler
{
    public ItemsListHandler(IRequestContext context)
            : base(context)
    {
    }
}