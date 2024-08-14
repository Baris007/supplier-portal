using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Item.ItemsRow>;
using MyRow = SupplierPortal.Item.ItemsRow;

namespace SupplierPortal.Item;

public interface IItemsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IItemsRetrieveHandler
{
    public ItemsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}