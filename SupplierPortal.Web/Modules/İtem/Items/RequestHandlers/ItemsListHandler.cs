using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.İtem.ItemsRow>;
using MyRow = SupplierPortal.İtem.ItemsRow;

namespace SupplierPortal.İtem;

public interface IItemsListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class ItemsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IItemsListHandler
{
    public ItemsListHandler(IRequestContext context)
            : base(context)
    {
    }
}