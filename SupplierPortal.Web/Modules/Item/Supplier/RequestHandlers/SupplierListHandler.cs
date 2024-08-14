using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Item.SupplierRow>;
using MyRow = SupplierPortal.Item.SupplierRow;

namespace SupplierPortal.Item;

public interface ISupplierListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class SupplierListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierListHandler
{
    public SupplierListHandler(IRequestContext context)
            : base(context)
    {
    }
}