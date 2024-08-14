using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.İtem.ItemsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.İtem.ItemsRow;

namespace SupplierPortal.İtem;

public interface IItemsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class ItemsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IItemsSaveHandler
{
    public ItemsSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}