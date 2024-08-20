import{c as e,f as o,g as u,h as y,i as R,j as s}from"../../../_chunks/chunk-7V7WNOD5.js";var E=o(s(),1);var f=o(s(),1);var d=class d extends f.ColumnsBase{};e(d,"ItemColumns"),d.columnsKey="Inventory.Item",d.Fields=(0,f.fieldsProxy)();var v=d;var i=o(s(),1);var n=class n extends i.PrefixedContext{constructor(C){if(super(C),!n.init){n.init=!0;var r=i.StringEditor;(0,i.initFormType)(n,["ItemCode",r,"ItemName",r])}}};e(n,"ItemForm"),n.formKey="Inventory.Item";var l=n;var D=o(s(),1);var t=class t{};e(t,"ItemRow"),t.idProperty="Id",t.nameProperty="ItemCode",t.localTextPrefix="Inventory.Item",t.deletePermission="Administration:General",t.insertPermission="Administration:General",t.readPermission="Administration:General",t.updatePermission="Administration:General",t.Fields=(0,D.fieldsProxy)();var a=t;var w=o(s(),1),p;(r=>(r.baseUrl="Inventory/Item",r.Methods={Create:"Inventory/Item/Create",Update:"Inventory/Item/Update",Delete:"Inventory/Item/Delete",Retrieve:"Inventory/Item/Retrieve",List:"Inventory/Item/List"},["Create","Update","Delete","Retrieve","List"].forEach(L=>{r[L]=function(O,k,A){return(0,w.serviceRequest)(r.baseUrl+"/"+L,O,k,A)}})))(p||(p={}));var P=o(s(),1);var I=o(s(),1);var U,g,N;U=[I.Decorators.registerClass("SupplierPortal.Inventory.ItemDialog")];var m=class m extends(N=I.EntityDialog){constructor(){super(...arguments);this.form=new l(this.idPrefix)}getFormKey(){return l.formKey}getRowDefinition(){return a}getService(){return p.baseUrl}};g=u(N),m=R(g,0,"ItemDialog",U,m),e(m,"ItemDialog"),y(g,1,m);var x=m;var b,q,h;b=[P.Decorators.registerClass("SupplierPortal.Inventory.ItemGrid")];var c=class c extends(h=P.EntityGrid){getColumnsKey(){return v.columnsKey}getDialogType(){return x}getRowDefinition(){return a}getService(){return p.baseUrl}};q=u(h),c=R(q,0,"ItemGrid",b,c),e(c,"ItemGrid"),y(q,1,c);var S=c;var le=e(()=>(0,E.gridPageInit)(S),"default");export{le as default};
//# sourceMappingURL=ItemPage.js.map
