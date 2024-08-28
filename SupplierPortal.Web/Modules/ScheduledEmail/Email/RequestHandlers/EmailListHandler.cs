using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SupplierPortal.ScheduledEmail.EmailRow>;
using MyRow = SupplierPortal.ScheduledEmail.EmailRow;

namespace SupplierPortal.ScheduledEmail;

public interface IEmailListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class EmailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmailListHandler
{
    public EmailListHandler(IRequestContext context)
            : base(context)
    {
    }
}