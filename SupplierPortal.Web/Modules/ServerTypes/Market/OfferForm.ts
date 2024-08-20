import { OfferDetailEditor } from "@/Market/OfferDetail/OfferDetailEditor";
import { SupplierEditor } from "@/Market/Supplier/SupplierEditor";
import { IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferForm {
    Supplier: SupplierEditor;
    State: IntegerEditor;
    Detail: OfferDetailEditor;
}

export class OfferForm extends PrefixedContext {
    static readonly formKey = 'Market.Offer';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OfferForm.init)  {
            OfferForm.init = true;

            var w0 = SupplierEditor;
            var w1 = IntegerEditor;
            var w2 = OfferDetailEditor;

            initFormType(OfferForm, [
                'Supplier', w0,
                'State', w1,
                'Detail', w2
            ]);
        }
    }
}