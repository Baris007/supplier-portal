using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Portal.ItemsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Portal.ItemsRow;

namespace SupplierPortal.Portal;

public interface IItemsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IItemsSaveHandler
{
    public ItemsSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}