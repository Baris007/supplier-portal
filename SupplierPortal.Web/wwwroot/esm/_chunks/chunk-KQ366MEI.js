import{c as t,f as r,j as s}from"./chunk-7V7WNOD5.js";var L=r(s(),1);var P=class P extends L.ColumnsBase{};t(P,"ItemsColumns"),P.columnsKey="Portal.Items",P.Fields=(0,L.fieldsProxy)();var D=P;var g=r(s(),1);var i=class i{};t(i,"ItemsRow"),i.idProperty="Id",i.nameProperty="ItemName",i.localTextPrefix="Portal.Items",i.deletePermission="Administration:General",i.insertPermission="Administration:General",i.readPermission="Administration:General",i.updatePermission="Administration:General",i.Fields=(0,g.fieldsProxy)();var O=i;var k=r(s(),1),E;(e=>(e.baseUrl="Portal/Items",e.Methods={Create:"Portal/Items/Create",Update:"Portal/Items/Update",Delete:"Portal/Items/Delete",Retrieve:"Portal/Items/Retrieve",List:"Portal/Items/List"},["Create","Update","Delete","Retrieve","List"].forEach(o=>{e[o]=function(v,y,x){return(0,k.serviceRequest)(e.baseUrl+"/"+o,v,y,x)}})))(E||(E={}));var I=r(s(),1);var S=class S extends I.ColumnsBase{};t(S,"OffersColumns"),S.columnsKey="Portal.Offers",S.Fields=(0,I.fieldsProxy)();var b=S;var A=r(s(),1);var n=class n{};t(n,"OffersRow"),n.idProperty="Id",n.nameProperty="ItemName",n.localTextPrefix="Portal.Offers",n.deletePermission="Administration:General",n.insertPermission="Administration:General",n.readPermission="Administration:General",n.updatePermission="Administration:General",n.Fields=(0,A.fieldsProxy)();var N=n;var G=r(s(),1),U;(e=>(e.baseUrl="Portal/Offers",e.Methods={Create:"Portal/Offers/Create",Update:"Portal/Offers/Update",Delete:"Portal/Offers/Delete",Retrieve:"Portal/Offers/Retrieve",List:"Portal/Offers/List"},["Create","Update","Delete","Retrieve","List"].forEach(o=>{e[o]=function(v,y,x){return(0,G.serviceRequest)(e.baseUrl+"/"+o,v,y,x)}})))(U||(U={}));var C=r(s(),1);var q=class q extends C.ColumnsBase{};t(q,"SupplierColumns"),q.columnsKey="Portal.Supplier",q.Fields=(0,C.fieldsProxy)();var w=q;var K=r(s(),1);var a=class a{};t(a,"SupplierRow"),a.idProperty="Id",a.nameProperty="CompanyName",a.localTextPrefix="Portal.Supplier",a.deletePermission="Administration:General",a.insertPermission="Administration:General",a.readPermission="Administration:General",a.updatePermission="Administration:General",a.Fields=(0,K.fieldsProxy)();var h=a;var B=r(s(),1),T;(e=>(e.baseUrl="Portal/Supplier",e.Methods={Create:"Portal/Supplier/Create",Update:"Portal/Supplier/Update",Delete:"Portal/Supplier/Delete",Retrieve:"Portal/Supplier/Retrieve",List:"Portal/Supplier/List"},["Create","Update","Delete","Retrieve","List"].forEach(o=>{e[o]=function(v,y,x){return(0,B.serviceRequest)(e.baseUrl+"/"+o,v,y,x)}})))(T||(T={}));var l=r(s(),1);var c=class c extends l.PrefixedContext{constructor(p){if(super(p),!c.init){c.init=!0;var e=l.IntegerEditor,o=l.StringEditor;(0,l.initFormType)(c,["ItemCode",e,"ItemName",o])}}};t(c,"ItemsForm"),c.formKey="Portal.Items";var F=c;var m=r(s(),1);var d=class d extends m.PrefixedContext{constructor(p){if(super(p),!d.init){d.init=!0;var e=m.IntegerEditor,o=m.ServiceLookupEditor;(0,m.initFormType)(d,["Amount",e,"ItemId",o,"SupplierId",o])}}};t(d,"OffersForm"),d.formKey="Portal.Offers";var M=d;var R=r(s(),1);var u=class u extends R.PrefixedContext{constructor(p){if(super(p),!u.init){u.init=!0;var e=R.StringEditor;(0,R.initFormType)(u,["CompanyName",e,"Email",e])}}};t(u,"SupplierForm"),u.formKey="Portal.Supplier";var j=u;export{D as a,F as b,O as c,E as d,b as e,M as f,N as g,U as h,w as i,j,h as k,T as l};
//# sourceMappingURL=chunk-KQ366MEI.js.map
