import { IntegerEditor, DecimalEditor, StringEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferDetailForm {
    OfferId: IntegerEditor;
    Quantity: DecimalEditor;
    Price: DecimalEditor;
    Description: StringEditor;
    ItemId: IntegerEditor;
    Curency: StringEditor;
    Date: DateEditor;
    TotalPrice: DecimalEditor;
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
            var w3 = DateEditor;

            initFormType(OfferDetailForm, [
                'OfferId', w0,
                'Quantity', w1,
                'Price', w1,
                'Description', w2,
                'ItemId', w0,
                'Curency', w2,
                'Date', w3,
                'TotalPrice', w1
            ]);
        }
    }
}