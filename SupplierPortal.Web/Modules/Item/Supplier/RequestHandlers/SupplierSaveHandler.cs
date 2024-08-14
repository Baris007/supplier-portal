using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Item.SupplierRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Item.SupplierRow;

namespace SupplierPortal.Item;

public interface ISupplierSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class SupplierSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierSaveHandler
{
    public SupplierSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}