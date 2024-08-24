import { Decorators } from "@serenity-is/corelib";
import { GridEditorDialog } from "@serenity-is/extensions";
import { OfferDetailForm, OfferDetailRow } from "@/ServerTypes/Market";

@Decorators.registerClass("SupplierPortal.Market.OfferDetailDialog")
export class OfferDetailDialog extends GridEditorDialog<OfferDetailRow> {
    protected getFormKey() { return OfferDetailForm.formKey; }
    protected getNameProperty() { return OfferDetailRow.nameProperty; }
    protected getLocalTextPrefix() { return OfferDetailRow.localTextPrefix; }

    protected form: OfferDetailForm = new OfferDetailForm(this.idPrefix);
    constructor() {
        super()
        
        this.form.Price.changeSelect2(e => {
            this.form.TotalPrice.value = this.form.Price.value * this.form.Quantity.value
        })
    }
}