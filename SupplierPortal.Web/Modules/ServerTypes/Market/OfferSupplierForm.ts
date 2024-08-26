import { PrefixedContext, initFormType } from "@serenity-is/corelib";
import { LookupEditor, IntegerEditor } from "serenity.corelib";

export interface OfferSupplierForm {
    SupplierId: LookupEditor;
    OfferId: IntegerEditor;
}

export class OfferSupplierForm extends PrefixedContext {
    static readonly formKey = 'Market.OfferSupplier';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OfferSupplierForm.init)  {
            OfferSupplierForm.init = true;

            var w0 = LookupEditor;
            var w1 = IntegerEditor;

            initFormType(OfferSupplierForm, [
                'SupplierId', w0,
                'OfferId', w1
            ]);
        }
    }
}