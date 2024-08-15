using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Market.ItemRow>;
using MyRow = SupplierPortal.Market.ItemRow;

namespace SupplierPortal.Market;

public interface IItemRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IItemRetrieveHandler
{
    public ItemRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}