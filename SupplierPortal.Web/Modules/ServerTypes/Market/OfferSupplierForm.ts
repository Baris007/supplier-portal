import { IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferSupplierForm {
    SupplierId: IntegerEditor;
    OfferId: IntegerEditor;
}

export class OfferSupplierForm extends PrefixedContext {
    static readonly formKey = 'Market.OfferSupplier';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OfferSupplierForm.init)  {
            OfferSupplierForm.init = true;

            var w0 = IntegerEditor;

            initFormType(OfferSupplierForm, [
                'SupplierId', w0,
                'OfferId', w0
            ]);
        }
    }
}