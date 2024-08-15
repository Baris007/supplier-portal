import { IntegerEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferForm {
    ItemId: IntegerEditor;
    SupplierId: IntegerEditor;
    Email: StringEditor;
    State: IntegerEditor;
    Detail: StringEditor;
    Id: IntegerEditor;
}

export class OfferForm extends PrefixedContext {
    static readonly formKey = 'Market.Offer';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OfferForm.init)  {
            OfferForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(OfferForm, [
                'ItemId', w0,
                'SupplierId', w0,
                'Email', w1,
                'State', w0,
                'Detail', w1,
                'Id', w0
            ]);
        }
    }
}