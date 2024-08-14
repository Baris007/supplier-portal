import { IntegerEditor, ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OffersForm {
    Amount: IntegerEditor;
    ItemId: ServiceLookupEditor;
    SupplierId: ServiceLookupEditor;
}

export class OffersForm extends PrefixedContext {
    static readonly formKey = 'Portal.Offers';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OffersForm.init)  {
            OffersForm.init = true;

            var w0 = IntegerEditor;
            var w1 = ServiceLookupEditor;

            initFormType(OffersForm, [
                'Amount', w0,
                'ItemId', w1,
                'SupplierId', w1
            ]);
        }
    }
}