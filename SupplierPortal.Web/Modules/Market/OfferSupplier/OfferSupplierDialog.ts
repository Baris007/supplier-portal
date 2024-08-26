import { Decorators } from "@serenity-is/corelib";
import { GridEditorDialog } from "@serenity-is/extensions";
import { OfferSupplierForm, OfferSupplierRow } from "@/ServerTypes/Market";

@Decorators.registerClass("SupplierPortal.Market.OfferSupplierDialog")
export class OfferSupplierDialog extends GridEditorDialog<OfferSupplierRow> {
    protected getFormKey() { return OfferSupplierForm.formKey; }
    protected getLocalTextPrefix() { return OfferSupplierRow.localTextPrefix; }

    protected form: OfferSupplierForm = new OfferSupplierForm(this.idPrefix);
}