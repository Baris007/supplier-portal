using Serenity.Navigation;
using MyPages = SupplierPortal.Market.Pages;

[assembly: NavigationLink(int.MaxValue, "Market/Offer", typeof(MyPages.OfferPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Market/Supplier", typeof(MyPages.SupplierPage), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Market/Offer Supplier", typeof(MyPages.OfferSupplierPage), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Market/Offer Detail", typeof(MyPages.OfferDetailPage), icon: null)]
