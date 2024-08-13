using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Administration.LanguageRow;


namespace SupplierPortal.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}