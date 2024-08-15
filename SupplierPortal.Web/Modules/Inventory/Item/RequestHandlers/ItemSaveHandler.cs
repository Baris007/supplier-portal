using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Inventory.ItemRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Inventory.ItemRow;

namespace SupplierPortal.Inventory;

public interface IItemSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IItemSaveHandler
{
    public ItemSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}