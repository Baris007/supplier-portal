import { LookupEditor, IntegerEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferSupplierForm {
    SupplierId: LookupEditor;
    OfferId: IntegerEditor;
    Email: StringEditor;
    OfficalName: StringEditor;
    OfficalSurname: StringEditor;
    CallNumber: StringEditor;
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
            var w2 = StringEditor;

            initFormType(OfferSupplierForm, [
                'SupplierId', w0,
                'OfferId', w1,
                'Email', w2,
                'OfficalName', w2,
                'OfficalSurname', w2,
                'CallNumber', w2
            ]);
        }
    }
}