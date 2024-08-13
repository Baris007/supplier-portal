import{c as u,f as I,g,h as d,i as v,j as C}from"./chunk-7V7WNOD5.js";var s=I(C(),1);var k,p,G;k=[s.Decorators.registerEditor("SupplierPortal.Administration.PermissionCheckEditor",[s.IGetEditValue,s.ISetEditValue])];var h=class h extends(G=s.DataGrid){constructor(e){super(e);this._rolePermissions={};this._implicitPermissions={};let t={},r=this.getSortedGroupAndPermissionKeys(t).map(n=>({Key:n,ParentKey:this.getParentKey(n),Title:t[n],GrantRevoke:null,IsGroup:n.charAt(n.length-1)===":"}));this.byParentKey=(0,s.toGrouping)(r,n=>n.ParentKey),this.setItems(r)}getIdProperty(){return"Key"}getItemGrantRevokeClass(e,t){if(!e.IsGroup)return e.GrantRevoke===t?" checked":"";let i=this.getDescendants(e,!0),r=i.filter(n=>n.GrantRevoke===t);return r.length?i.length===r.length?"checked":"checked partial":""}roleOrImplicit(e){if(this._rolePermissions[e])return!0;for(var t of Object.keys(this._rolePermissions)){var i=this._implicitPermissions[t];if(i&&i[e])return!0}for(var r of Object.keys(this._implicitPermissions)){var n=this.view.getItemById(r);if(n&&n.GrantRevoke==!0){var i=this._implicitPermissions[r];if(i&&i[e])return!0}}}getItemEffectiveClass(e){if(e.IsGroup){let i=this.getDescendants(e,!0),r=(0,s.count)(i,n=>n.GrantRevoke===!0||n.GrantRevoke==null&&this.roleOrImplicit(n.Key));return r===i.length||i.length===0?"allow":r===0?"deny":"partial"}return e.GrantRevoke===!0||e.GrantRevoke==null&&this.roleOrImplicit(e.Key)?" allow":" deny"}getColumns(){let e=[{name:(0,s.localText)("Site.UserPermissionDialog.Permission"),field:"Title",format:s.SlickFormatting.treeToggle(()=>this.view,t=>t.Key,t=>{let i=t.item;return'<span class="effective-permission '+this.getItemEffectiveClass(i)+'">'+(0,s.htmlEncode)(t.value)+"</span>"}),width:495,sortable:!1},{name:(0,s.localText)("Site.UserPermissionDialog.Grant"),field:"Grant",format:u(t=>{let i=t.item;return"<span class='check-box grant no-float "+this.getItemGrantRevokeClass(i,!0)+"'></span>"},"format"),width:65,sortable:!1,headerCssClass:"align-center",cssClass:"align-center"}];return this.options.showRevoke&&e.push({name:(0,s.localText)("Site.UserPermissionDialog.Revoke"),field:"Revoke",format:u(t=>{let i=t.item;return'<span class="check-box revoke no-float '+this.getItemGrantRevokeClass(i,!1)+'"></span>'},"format"),width:65,sortable:!1,headerCssClass:"align-center",cssClass:"align-center"}),e}setItems(e){s.SlickTreeHelper.setIndents(e,t=>t.Key,t=>t.ParentKey,!1),this.view.setItems(e,!0)}onViewSubmit(){return!1}onViewFilter(e){return!super.onViewFilter(e)||!s.SlickTreeHelper.filterById(e,this.view,t=>t.ParentKey)?!1:this.searchText?this.matchContains(e)||e.IsGroup&&(0,s.any)(this.getDescendants(e,!1),t=>this.matchContains(t)):!0}matchContains(e){return(0,s.stripDiacritics)(e.Title||"").toLowerCase().indexOf(this.searchText)>=0||(0,s.stripDiacritics)(e.Key||"").toLowerCase().indexOf(this.searchText)>=0}getDescendants(e,t){let i=[],r=[e];for(;r.length>0;){let n=r.pop(),o=this.byParentKey[n.Key];if(o)for(let a of o)(!t||!a.IsGroup)&&i.push(a),r.push(a)}return i}onClick(e,t,i){var a,m;if(super.onClick(e,t,i),!e.defaultPrevented&&!((a=e.isDefaultPrevented)!=null&&a.call(e))&&s.SlickTreeHelper.toggleClick(e,t,i,this.view,l=>l.Key),e.defaultPrevented||(m=e.isDefaultPrevented)!=null&&m.call(e))return;let r=(0,s.Fluent)(e.target),n=r.hasClass("grant");if(n||r.hasClass("revoke")){e.preventDefault();let l=this.itemAt(t),c=r.hasClass("checked")||r.hasClass("partial");if(c?n=null:n=n!==c,l.IsGroup)for(var o of this.getDescendants(l,!0))o.GrantRevoke=n;else l.GrantRevoke=n;this.slickGrid.invalidate()}}getParentKey(e){e.charAt(e.length-1)===":"&&(e=e.substr(0,e.length-1));let t=e.lastIndexOf(":");return t>=0?e.substr(0,t+1):null}getButtons(){return[]}createToolbarExtensions(){super.createToolbarExtensions(),s.GridUtils.addQuickSearchInputCustom(this.toolbar.element,(e,t)=>{this.searchText=(0,s.stripDiacritics)((0,s.trimToNull)(t)||"").toLowerCase(),this.view.setItems(this.view.getItems(),!0)})}getSortedGroupAndPermissionKeys(e){var n;let t=(0,s.getRemoteData)("Administration.PermissionKeys"),i={};for(var r of t){let o=r;if(!o||o.charAt(o.length-1)==":"&&(o=o.substring(0,o.length-1),o.length===0)||e[o])continue;e[o]=(n=(0,s.tryGetText)("Permission."+o))!=null?n:o;let a=o.split(":"),m="",l="";for(let c=0;c<a.length-1;c++){m=m+a[c]+":";let f=(0,s.tryGetText)("Permission."+m);f==null&&(f=a[c]),e[m]=f,l=l+e[m]+":",i[m]=l}i[o]=l+e[o]}return t=Object.keys(e),t=t.sort((o,a)=>(0,s.turkishLocaleCompare)(i[o],i[a])),t}get value(){let e=[];for(let t of this.view.getItems())t.GrantRevoke!=null&&t.Key.charAt(t.Key.length-1)!=":"&&e.push({PermissionKey:t.Key,Granted:t.GrantRevoke});return e}set value(e){var t;for(let i of this.view.getItems())i.GrantRevoke=null;if(e!=null)for(let i of e){let r=this.view.getItemById(i.PermissionKey);r&&(r.GrantRevoke=(t=i.Granted)!=null?t:!0)}this.setItems(this.getItems())}get rolePermissions(){return Object.keys(this._rolePermissions)}set rolePermissions(e){if(this._rolePermissions={},e)for(let t of e)this._rolePermissions[t]=!0;this.setItems(this.getItems())}set implicitPermissions(e){if(this._implicitPermissions={},e)for(var t of Object.keys(e)){this._implicitPermissions[t]=this._implicitPermissions[t]||{};var i=e[t];if(i)for(var r of i)this._implicitPermissions[t][r]=!0}}};p=g(G),h=v(p,0,"PermissionCheckEditor",k,h),u(h,"PermissionCheckEditor"),d(p,1,h);var P=h;export{P as a};
//# sourceMappingURL=chunk-SZK4UCBY.js.map
