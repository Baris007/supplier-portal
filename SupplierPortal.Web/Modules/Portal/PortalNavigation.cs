using Serenity.Navigation;
using MyPages = SupplierPortal.Portal.Pages;

[assembly: NavigationLink(int.MaxValue, "Portal/Items", typeof(MyPages.ItemsPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Portal/Offers", typeof(MyPages.OffersPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Portal/Supplier", typeof(MyPages.SupplierPage), icon: null)]