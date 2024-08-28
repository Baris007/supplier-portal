using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.ScheduledEmail.Columns;

[ColumnsScript("ScheduledEmail.Email")]
[BasedOnRow(typeof(EmailRow), CheckNames = true)]
public class EmailColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [Width(120)]
    public int OfferSupplierId { get; set; }
    [Width(100)]
    public int OfferId { get; set; }
    [Width(100)]
    public bool IsSended { get; set; }
    [Width(100)]
    public bool IsAutoSended { get; set; }
}