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

        this.form.ItemId.changeSelect2((e: any) => {
/*            debugger*/
            this.form.Kdv.value = e.originalEvent.added.source.KDV;
            this.form.Unit.value = e.originalEvent.added.source.Unit;
        });
    }
}