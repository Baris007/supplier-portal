import{c as t,f as r,j as s}from"./chunk-7V7WNOD5.js";var q=r(s(),1);var x=class x extends q.ColumnsBase{};t(x,"ItemsColumns"),x.columnsKey="Item.Items",x.Fields=(0,q.fieldsProxy)();var E=x;var D=r(s(),1);var i=class i{};t(i,"ItemsRow"),i.idProperty="Id",i.nameProperty="ItemName",i.localTextPrefix="Item.Items",i.deletePermission="Administration:General",i.insertPermission="Administration:General",i.readPermission="Administration:General",i.updatePermission="Administration:General",i.Fields=(0,D.fieldsProxy)();var O=i;var N=r(s(),1),g;(e=>(e.baseUrl="Item/Items",e.Methods={Create:"Item/Items/Create",Update:"Item/Items/Update",Delete:"Item/Items/Delete",Retrieve:"Item/Items/Retrieve",List:"Item/Items/List"},["Create","Update","Delete","Retrieve","List"].forEach(o=>{e[o]=function(d,y,I){return(0,N.serviceRequest)(e.baseUrl+"/"+o,d,y,I)}})))(g||(g={}));var L=r(s(),1);var S=class S extends L.ColumnsBase{};t(S,"OffersColumns"),S.columnsKey="Item.Offers",S.Fields=(0,L.fieldsProxy)();var k=S;var U=r(s(),1);var n=class n{};t(n,"OffersRow"),n.idProperty="Id",n.nameProperty="ItemName",n.localTextPrefix="Item.Offers",n.deletePermission="Administration:General",n.insertPermission="Administration:General",n.readPermission="Administration:General",n.updatePermission="Administration:General",n.Fields=(0,U.fieldsProxy)();var b=n;var A=r(s(),1),w;(e=>(e.baseUrl="Item/Offers",e.Methods={Create:"Item/Offers/Create",Update:"Item/Offers/Update",Delete:"Item/Offers/Delete",Retrieve:"Item/Offers/Retrieve",List:"Item/Offers/List"},["Create","Update","Delete","Retrieve","List"].forEach(o=>{e[o]=function(d,y,I){return(0,A.serviceRequest)(e.baseUrl+"/"+o,d,y,I)}})))(w||(w={}));var P=r(s(),1);var C=class C extends P.ColumnsBase{};t(C,"SupplierColumns"),C.columnsKey="Item.Supplier",C.Fields=(0,P.fieldsProxy)();var G=C;var K=r(s(),1);var a=class a{};t(a,"SupplierRow"),a.idProperty="Id",a.nameProperty="CompanyName",a.localTextPrefix="Item.Supplier",a.deletePermission="Administration:General",a.insertPermission="Administration:General",a.readPermission="Administration:General",a.updatePermission="Administration:General",a.Fields=(0,K.fieldsProxy)();var h=a;var B=r(s(),1),T;(e=>(e.baseUrl="Item/Supplier",e.Methods={Create:"Item/Supplier/Create",Update:"Item/Supplier/Update",Delete:"Item/Supplier/Delete",Retrieve:"Item/Supplier/Retrieve",List:"Item/Supplier/List"},["Create","Update","Delete","Retrieve","List"].forEach(o=>{e[o]=function(d,y,I){return(0,B.serviceRequest)(e.baseUrl+"/"+o,d,y,I)}})))(T||(T={}));var c=r(s(),1);var l=class l extends c.PrefixedContext{constructor(m){if(super(m),!l.init){l.init=!0;var e=c.IntegerEditor,o=c.StringEditor;(0,c.initFormType)(l,["ItemCode",e,"ItemName",o])}}};t(l,"ItemsForm"),l.formKey="Item.Items";var F=l;var p=r(s(),1);var u=class u extends p.PrefixedContext{constructor(m){if(super(m),!u.init){u.init=!0;var e=p.IntegerEditor,o=p.StringEditor,d=p.ServiceLookupEditor;(0,p.initFormType)(u,["ItemCode",e,"ItemName",o,"CompanyName",o,"Email",o,"State",o,"ItemId",d,"SupplierId",d])}}};t(u,"OffersForm"),u.formKey="Item.Offers";var M=u;var f=r(s(),1);var R=class R extends f.PrefixedContext{constructor(m){if(super(m),!R.init){R.init=!0;var e=f.StringEditor;(0,f.initFormType)(R,["CompanyName",e,"Email",e])}}};t(R,"SupplierForm"),R.formKey="Item.Supplier";var j=R;export{E as a,F as b,O as c,g as d,k as e,M as f,b as g,w as h,G as i,j,h as k,T as l};
//# sourceMappingURL=chunk-NMZH4F2G.js.map
