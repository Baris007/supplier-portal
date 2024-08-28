using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SupplierPortal.ScheduledEmail.EmailRow>;
using MyRow = SupplierPortal.ScheduledEmail.EmailRow;

namespace SupplierPortal.ScheduledEmail;

public interface IEmailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class EmailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmailRetrieveHandler
{
    public EmailRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}