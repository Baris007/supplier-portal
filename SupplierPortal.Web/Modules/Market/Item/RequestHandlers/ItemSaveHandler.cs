using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Market.ItemRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Market.ItemRow;

namespace SupplierPortal.Market;

public interface IItemSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IItemSaveHandler
{
    public ItemSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}