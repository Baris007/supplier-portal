using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.OfferSupplier")]
[BasedOnRow(typeof(OfferSupplierRow), CheckNames = true)]
public class OfferSupplierColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]

    [Visible(false)]
    public int Id { get; set; }
    [Visible(false)]
    public int SupplierId { get; set; }
    public string CompanyName { get; set; }
    [Visible(false)]
    public int OfferId { get; set; }
}