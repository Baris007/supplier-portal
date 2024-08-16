<<<<<<< HEAD
﻿using Serenity.ComponentModel;
using System.IO;

=======
using Serenity.ComponentModel;
// Ali sorun yok 
>>>>>>> Zeki
namespace SupplierPortal.Market.Forms;

[FormScript("Market.Offer")]
[BasedOnRow(typeof(OfferRow), CheckNames = true)]
public class OfferForm
{
<<<<<<< Updated upstream
<<<<<<< HEAD
    public short Amount { get; set; }
    public string ItemName { get; set; }
    public string CompanyName { get; set; }
    public string Email { get; set; }
    public Stream State { get; set; }
    public int ItemId { get; set; }
    public int SupplierId { get; set; }
=======
=======
    [SupplierEditor]
    public List<SupplierRow> Supplier { get; set; }
>>>>>>> Stashed changes
    public int ItemId { get; set; }
    public int SupplierId { get; set; }
    public string Email { get; set; }
    public short State { get; set; }
    public List<OfferDetailRow> Detail { get; set; }

    [Visible(false)]
    public int Id { get; set; }
>>>>>>> Zeki
}