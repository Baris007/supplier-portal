using Serenity.ComponentModel;
using System.ComponentModel;
using System.IO;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.Offer")]
[BasedOnRow(typeof(OfferRow), CheckNames = true)]
public class OfferColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public short Amount { get; set; }
    [EditLink]
    public string ItemName { get; set; }
    public string CompanyName { get; set; }
    public string Email { get; set; }
    public Stream State { get; set; }
    public string ItemItemName { get; set; }
    public string SupplierCompanyName { get; set; }
}