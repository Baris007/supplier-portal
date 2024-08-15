<<<<<<< HEAD
﻿import { IntegerEditor, StringEditor, ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferForm {
    Amount: IntegerEditor;
    ItemName: StringEditor;
    CompanyName: StringEditor;
    Email: StringEditor;
    State: StringEditor;
    ItemId: ServiceLookupEditor;
    SupplierId: ServiceLookupEditor;
=======
﻿import { IntegerEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferForm {
    ItemId: IntegerEditor;
    SupplierId: IntegerEditor;
    Email: StringEditor;
    State: IntegerEditor;
    Detail: StringEditor;
    Id: IntegerEditor;
>>>>>>> Zeki
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
<<<<<<< HEAD
            var w2 = ServiceLookupEditor;

            initFormType(OfferForm, [
                'Amount', w0,
                'ItemName', w1,
                'CompanyName', w1,
                'Email', w1,
                'State', w1,
                'ItemId', w2,
                'SupplierId', w2
=======

            initFormType(OfferForm, [
                'ItemId', w0,
                'SupplierId', w0,
                'Email', w1,
                'State', w0,
                'Detail', w1,
                'Id', w0
>>>>>>> Zeki
            ]);
        }
    }
}