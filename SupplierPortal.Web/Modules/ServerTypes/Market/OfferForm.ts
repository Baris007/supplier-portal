import { OfferSupplierEditor } from "@/Market/OfferSupplier/OfferSupplierEditor";
import { IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferForm {
    OfferSupplier: OfferSupplierEditor;
    State: IntegerEditor;
}

export class OfferForm extends PrefixedContext {
    static readonly formKey = 'Market.Offer';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OfferForm.init)  {
            OfferForm.init = true;

            var w0 = OfferSupplierEditor;
            var w1 = IntegerEditor;

            initFormType(OfferForm, [
                'OfferSupplier', w0,
                'State', w1
            ]);
        }
    }
}