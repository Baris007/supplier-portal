﻿import { OfferDetailEditor } from "@/Market/OfferDetail/OfferDetailEditor";
import { OfferSupplierEditor } from "@/Market/OfferSupplier/OfferSupplierEditor";
import { PrefixedContext, initFormType } from "@serenity-is/corelib";
import { IntegerEditor } from "serenity.corelib";

export interface OfferForm {
    CompanyName: OfferSupplierEditor;
    State: IntegerEditor;
    Email: StringEditor;
    Detail: OfferDetailEditor;
}

export class OfferForm extends PrefixedContext {
    static readonly formKey = 'Market.Offer';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OfferForm.init)  {
            OfferForm.init = true;

            var w0 = OfferSupplierEditor;
            var w1 = IntegerEditor;
            var w2 = StringEditor;
            var w3 = OfferDetailEditor;

            initFormType(OfferForm, [
                'CompanyName', w0,
                'State', w1,
                'Email', w2,
                'Detail', w3
            ]);
        }
    }
}