import { IntegerEditor, LookupEditor, DecimalEditor, StringEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferDetailForm {
    OfferId: IntegerEditor;
    ItemId: LookupEditor;
    Quantity: DecimalEditor;
    Price: DecimalEditor;
    TotalPrice: DecimalEditor;
    Curency: StringEditor;
    Description: StringEditor;
    Date: DateEditor;
}

export class OfferDetailForm extends PrefixedContext {
    static readonly formKey = 'Market.OfferDetail';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OfferDetailForm.init)  {
            OfferDetailForm.init = true;

            var w0 = IntegerEditor;
            var w1 = LookupEditor;
            var w2 = DecimalEditor;
            var w3 = StringEditor;
            var w4 = DateEditor;

            initFormType(OfferDetailForm, [
                'OfferId', w0,
                'ItemId', w1,
                'Quantity', w2,
                'Price', w2,
                'TotalPrice', w2,
                'Curency', w3,
                'Description', w3,
                'Date', w4
            ]);
        }
    }
}