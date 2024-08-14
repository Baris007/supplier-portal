using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SupplierPortal.Portal.OffersRow;

namespace SupplierPortal.Portal;

public interface IOffersDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class OffersDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IOffersDeleteHandler
{
    public OffersDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}