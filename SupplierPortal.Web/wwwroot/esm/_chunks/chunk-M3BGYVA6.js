import{c as t,f as o,j as i}from"./chunk-7V7WNOD5.js";var q=o(i(),1);var S=class S extends q.ColumnsBase{};t(S,"OfferColumns"),S.columnsKey="Market.Offer",S.Fields=(0,q.fieldsProxy)();var O=S;var k=o(i(),1);var P=class P extends k.ColumnsBase{};t(P,"OfferDetailColumns"),P.columnsKey="Market.OfferDetail",P.Fields=(0,k.fieldsProxy)();var I=P;var E=o(i(),1);var s=class s{};t(s,"OfferDetailRow"),s.idProperty="Id",s.nameProperty="Description",s.localTextPrefix="Market.OfferDetail",s.deletePermission="Administration:General",s.insertPermission="Administration:General",s.readPermission="Administration:General",s.updatePermission="Administration:General",s.Fields=(0,E.fieldsProxy)();var C=s;var g=o(i(),1),M;(e=>(e.baseUrl="Market/OfferDetail",e.Methods={Create:"Market/OfferDetail/Create",Update:"Market/OfferDetail/Update",Delete:"Market/OfferDetail/Delete",Retrieve:"Market/OfferDetail/Retrieve",List:"Market/OfferDetail/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(d,y,x){return(0,g.serviceRequest)(e.baseUrl+"/"+r,d,y,x)}})))(M||(M={}));var U=o(i(),1);var n=class n{};t(n,"OfferRow"),n.idProperty="Id",n.nameProperty="Email",n.localTextPrefix="Market.Offer",n.deletePermission="Administration:General",n.insertPermission="Administration:General",n.readPermission="Administration:General",n.updatePermission="Administration:General",n.Fields=(0,U.fieldsProxy)();var b=n;var G=o(i(),1),A;(e=>(e.baseUrl="Market/Offer",e.Methods={Create:"Market/Offer/Create",Update:"Market/Offer/Update",Delete:"Market/Offer/Delete",Retrieve:"Market/Offer/Retrieve",List:"Market/Offer/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(d,y,x){return(0,G.serviceRequest)(e.baseUrl+"/"+r,d,y,x)}})))(A||(A={}));var L=o(i(),1);var D=class D extends L.ColumnsBase{};t(D,"SupplierColumns"),D.columnsKey="Market.Supplier",D.Fields=(0,L.fieldsProxy)();var w=D;var K=o(i(),1);var a=class a{};t(a,"SupplierRow"),a.idProperty="Id",a.nameProperty="CompanyName",a.localTextPrefix="Market.Supplier",a.deletePermission="Administration:General",a.insertPermission="Administration:General",a.readPermission="Administration:General",a.updatePermission="Administration:General",a.Fields=(0,K.fieldsProxy)();var h=a;var N=o(i(),1),T;(e=>(e.baseUrl="Market/Supplier",e.Methods={Create:"Market/Supplier/Create",Update:"Market/Supplier/Update",Delete:"Market/Supplier/Delete",Retrieve:"Market/Supplier/Retrieve",List:"Market/Supplier/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(d,y,x){return(0,N.serviceRequest)(e.baseUrl+"/"+r,d,y,x)}})))(T||(T={}));var p=o(i(),1);var m=class m extends p.PrefixedContext{constructor(l){if(super(l),!m.init){m.init=!0;var e=p.IntegerEditor,r=p.DecimalEditor,d=p.StringEditor;(0,p.initFormType)(m,["OfferId",e,"Quantity",r,"Description",d,"Price",r,"Id",e])}}};t(m,"OfferDetailForm"),m.formKey="Market.OfferDetail";var Q=m;var c=o(i(),1);var u=class u extends c.PrefixedContext{constructor(l){if(super(l),!u.init){u.init=!0;var e=c.IntegerEditor,r=c.StringEditor;(0,c.initFormType)(u,["ItemId",e,"SupplierId",e,"Email",r,"State",e,"Detail",r,"Id",e])}}};t(u,"OfferForm"),u.formKey="Market.Offer";var B=u;var R=o(i(),1);var f=class f extends R.PrefixedContext{constructor(l){if(super(l),!f.init){f.init=!0;var e=R.StringEditor;(0,R.initFormType)(f,["CompanyName",e,"Email",e])}}};t(f,"SupplierForm"),f.formKey="Market.Supplier";var F=f;export{O as a,I as b,Q as c,C as d,M as e,B as f,b as g,A as h,w as i,F as j,h as k,T as l};
//# sourceMappingURL=chunk-M3BGYVA6.js.map