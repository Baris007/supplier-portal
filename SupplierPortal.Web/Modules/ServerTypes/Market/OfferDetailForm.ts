import { ServiceLookupEditor, DecimalEditor, StringEditor, IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferDetailForm {
    OfferId: ServiceLookupEditor;
    Quantity: DecimalEditor;
    Description: StringEditor;
    Price: DecimalEditor;
    ItemId: IntegerEditor;
    Curency: StringEditor;
}

export class OfferDetailForm extends PrefixedContext {
    static readonly formKey = 'Market.OfferDetail';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OfferDetailForm.init)  {
            OfferDetailForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = DecimalEditor;
            var w2 = StringEditor;
            var w3 = IntegerEditor;

            initFormType(OfferDetailForm, [
                'OfferId', w0,
                'Quantity', w1,
                'Description', w2,
                'Price', w1,
                'ItemId', w3,
                'Curency', w2
            ]);
        }
    }
}