using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Portal.SupplierRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Portal.SupplierRow;

namespace SupplierPortal.Portal;

public interface ISupplierSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class SupplierSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierSaveHandler
{
    public SupplierSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}