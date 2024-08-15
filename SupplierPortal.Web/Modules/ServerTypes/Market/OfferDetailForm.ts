import { ServiceLookupEditor, DecimalEditor, StringEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferDetailForm {
    OfferId: ServiceLookupEditor;
    Quantity: DecimalEditor;
    Description: StringEditor;
    StatusDate: DateEditor;
    Price: DecimalEditor;
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
            var w3 = DateEditor;

            initFormType(OfferDetailForm, [
                'OfferId', w0,
                'Quantity', w1,
                'Description', w2,
                'StatusDate', w3,
                'Price', w1
            ]);
        }
    }
}