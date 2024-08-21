using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.OfferSupplier")]
[BasedOnRow(typeof(OfferSupplierRow), CheckNames = true)]
public class OfferSupplierColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    public string CompanyName { get; set; }
    public int SupplierId { get; set; }
    public int OfferId { get; set; }
}