using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Items.ItemRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Items.ItemRow;

namespace SupplierPortal.Items;

public interface IItemSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IItemSaveHandler
{
    public ItemSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}