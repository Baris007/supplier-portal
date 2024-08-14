using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Item.ItemsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Item.ItemsRow;

namespace SupplierPortal.Item;

public interface IItemsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IItemsSaveHandler
{
    public ItemsSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}