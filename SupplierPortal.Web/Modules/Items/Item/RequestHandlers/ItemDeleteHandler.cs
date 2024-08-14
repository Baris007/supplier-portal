using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SupplierPortal.Items.ItemRow;

namespace SupplierPortal.Items;

public interface IItemDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class ItemDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IItemDeleteHandler
{
    public ItemDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}