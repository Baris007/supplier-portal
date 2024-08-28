using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SupplierPortal.ScheduledEmail.EmailRow;

namespace SupplierPortal.ScheduledEmail;

public interface IEmailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class EmailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmailDeleteHandler
{
    public EmailDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}