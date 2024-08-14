using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.İtem.ItemsRow>;
using MyRow = SupplierPortal.İtem.ItemsRow;

namespace SupplierPortal.İtem;

public interface IItemsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IItemsRetrieveHandler
{
    public ItemsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}