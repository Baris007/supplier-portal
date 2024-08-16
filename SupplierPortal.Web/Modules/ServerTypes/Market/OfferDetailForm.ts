import { StringEditor, DecimalEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferDetailForm {
    Description: StringEditor;
    Quantity: DecimalEditor;
    Price: DecimalEditor;
}

export class OfferDetailForm extends PrefixedContext {
    static readonly formKey = 'Market.OfferDetail';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OfferDetailForm.init)  {
            OfferDetailForm.init = true;

            var w0 = StringEditor;
            var w1 = DecimalEditor;

            initFormType(OfferDetailForm, [
                'Description', w0,
                'Quantity', w1,
                'Price', w1
            ]);
        }
    }
}