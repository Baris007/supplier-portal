using Serenity.Navigation;
using MyPages = SupplierPortal.Market.Pages;

[assembly: NavigationLink(int.MaxValue, "Market/Item", typeof(MyPages.ItemPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Market/Offer", typeof(MyPages.OfferPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Market/Supplier", typeof(MyPages.SupplierPage), icon: null)]