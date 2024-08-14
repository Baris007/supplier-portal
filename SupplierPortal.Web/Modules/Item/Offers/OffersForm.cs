using Serenity.ComponentModel;
using System.IO;

namespace SupplierPortal.Item.Forms;

[FormScript("Item.Offers")]
[BasedOnRow(typeof(OffersRow), CheckNames = true)]
public class OffersForm
{
    public short ItemCode { get; set; }
    public string ItemName { get; set; }
    public string CompanyName { get; set; }
    public string Email { get; set; }
    public Stream State { get; set; }
    public int ItemId { get; set; }
    public int SupplierId { get; set; }
}