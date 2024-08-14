using Serenity.ComponentModel;
using System.IO;

namespace SupplierPortal.Portal.Forms;

[FormScript("Portal.Offers")]
[BasedOnRow(typeof(OffersRow), CheckNames = true)]
public class OffersForm
{
    public short Amount { get; set; }
    //public string ItemName { get; set; }
    //public string CompanyName { get; set; }
    //public string Email { get; set; }
    //public Stream State { get; set; }
    public int ItemId { get; set; }
    public int SupplierId { get; set; }
}