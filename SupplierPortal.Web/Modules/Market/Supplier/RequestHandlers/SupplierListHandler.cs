using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.Market.SupplierRow>;
using MyRow = SupplierPortal.Market.SupplierRow;

namespace SupplierPortal.Market;

public interface ISupplierListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class SupplierListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierListHandler
{
    public SupplierListHandler(IRequestContext context)
            : base(context)
    {
    }
}