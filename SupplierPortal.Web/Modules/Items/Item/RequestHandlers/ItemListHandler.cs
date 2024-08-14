using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Items.ItemRow>;
using MyRow = SupplierPortal.Items.ItemRow;

namespace SupplierPortal.Items;

public interface IItemListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class ItemListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IItemListHandler
{
    public ItemListHandler(IRequestContext context)
            : base(context)
    {
    }
}