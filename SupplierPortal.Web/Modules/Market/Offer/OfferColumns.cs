using Serenity.ComponentModel;
using System.ComponentModel;

namespace SupplierPortal.Market.Columns;

[ColumnsScript("Market.Offer")]
[BasedOnRow(typeof(OfferRow), CheckNames = true)]
public class OfferColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }

    public short State { get; set; }



}