import { IntegerEditor, DecimalEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferDetailForm {
    OfferId: IntegerEditor;
    Quantity: DecimalEditor;
    Description: StringEditor;
    Price: DecimalEditor;
    Id: IntegerEditor;
}

export class OfferDetailForm extends PrefixedContext {
    static readonly formKey = 'Market.OfferDetail';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OfferDetailForm.init)  {
            OfferDetailForm.init = true;

            var w0 = IntegerEditor;
            var w1 = DecimalEditor;
            var w2 = StringEditor;

            initFormType(OfferDetailForm, [
                'OfferId', w0,
                'Quantity', w1,
                'Description', w2,
                'Price', w1,
                'Id', w0
            ]);
        }
    }
}