using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Item.OffersRow>;
using MyRow = SupplierPortal.Item.OffersRow;

namespace SupplierPortal.Item;

public interface IOffersListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class OffersListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IOffersListHandler
{
    public OffersListHandler(IRequestContext context)
            : base(context)
    {
    }
}