using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.ScheduledEmail.EmailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.ScheduledEmail.EmailRow;

namespace SupplierPortal.ScheduledEmail;

public interface IEmailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class EmailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmailSaveHandler
{
    public EmailSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}