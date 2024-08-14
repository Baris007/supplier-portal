using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.Items.ItemRow>;
using MyRow = SupplierPortal.Items.ItemRow;

namespace SupplierPortal.Items;

public interface IItemRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IItemRetrieveHandler
{
    public ItemRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}