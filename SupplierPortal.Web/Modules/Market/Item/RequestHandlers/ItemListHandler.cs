using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Market.ItemRow>;
using MyRow = SupplierPortal.Market.ItemRow;

namespace SupplierPortal.Market;

public interface IItemListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class ItemListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IItemListHandler
{
    public ItemListHandler(IRequestContext context)
            : base(context)
    {
    }
}