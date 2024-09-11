import { Decorators, jQueryPatch } from "@serenity-is/corelib";
import { GridEditorDialog } from "@serenity-is/extensions";
import { OfferSupplierForm, OfferSupplierRow, SupplierRow } from "@/ServerTypes/Market";

@Decorators.registerClass("SupplierPortal.Market.OfferSupplierDialog")
export class OfferSupplierDialog extends GridEditorDialog<OfferSupplierRow> {
    SupplierId: any;
    protected getFormKey() { return OfferSupplierForm.formKey; }
    protected getLocalTextPrefix() { return OfferSupplierRow.localTextPrefix; }

    protected form: OfferSupplierForm = new OfferSupplierForm(this.idPrefix);
    /*debugger*/
                //var today = new Date().toISOString().slice(0, 10);

    constructor(props: any) {
        super(props);
        
        this.form.SupplierId.changeSelect2((e: any) => {

            this.form.Email.value = e.originalEvent.added.source.Email;
            this.form.OfficalName.value = e.originalEvent.added.source.OfficalName;
            this.form.OfficalSurname.value = e.originalEvent.added.source.OfficalSurname;
            this.form.CallNumber.value = e.originalEvent.added.source.CallNumber;

            
        })
    }

}
           
