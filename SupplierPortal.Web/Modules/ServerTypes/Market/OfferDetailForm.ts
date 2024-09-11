import { IntegerEditor, LookupEditor, StringEditor, DecimalEditor, EnumEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { Currency } from "./Enum.Currency";

export interface OfferDetailForm {
    OfferId: IntegerEditor;
    ItemId: LookupEditor;
    Kdv: StringEditor;
    Unit: StringEditor;
    Quantity: DecimalEditor;
    Price: DecimalEditor;
    TotalPrice: DecimalEditor;
    Curency: EnumEditor;
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
            var w2 = StringEditor;
            var w3 = DecimalEditor;
            var w4 = EnumEditor;
            var w5 = DateEditor;

            initFormType(OfferDetailForm, [
                'OfferId', w0,
                'ItemId', w1,
                'Kdv', w2,
                'Unit', w2,
                'Quantity', w3,
                'Price', w3,
                'TotalPrice', w3,
                'Curency', w4,
                'Description', w2,
                'Date', w5
            ]);
        }
    }
}

[Currency]; // referenced types