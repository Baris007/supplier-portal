import { Decorators } from "@serenity-is/corelib";
import { GridEditorDialog } from "@serenity-is/extensions";
import { RequestDetailForm, RequestDetailRow } from "@/ServerTypes/Market";
import { OfferDetailColumns } from "../../ServerTypes/Market/OfferDetailColumns";

@Decorators.registerClass("SupplierPortal.Market.RequestDetailDialog")
export class RequestDetailDialog extends GridEditorDialog<RequestDetailRow> {
    protected getFormKey() { return RequestDetailForm.formKey; }
    protected getNameProperty() { return RequestDetailRow.nameProperty; }
    protected getLocalTextPrefix() { return RequestDetailRow.localTextPrefix; }

    protected form: RequestDetailForm = new RequestDetailForm(this.idPrefix);
    constructor() {
        super();
        this.form.Price.changeSelect2(e => {
            this.form.TotalPrice.value = this.form.Price.value * this.form.Quantity.value;
        });
        this.form.ItemId.changeSelect2((e: any) => {
            /*            debugger*/
            this.form.Kdv.value = e.originalEvent.added.source.KDV;
            this.form.Unit.value = e.originalEvent.added.source.Unit;
        });
    }


    }

   
