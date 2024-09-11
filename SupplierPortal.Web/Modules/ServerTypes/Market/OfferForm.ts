import { OfferDetailEditor } from "@/Market/OfferDetail/OfferDetailEditor";
import { OfferSupplierEditor } from "@/Market/OfferSupplier/OfferSupplierEditor";
import { EnumEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { State } from "./Enum.State";

export interface OfferForm {
    CompanyName: OfferSupplierEditor;
    State: EnumEditor;
    OfferDate: DateEditor;
    ValueDate: DateEditor;
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
            var w1 = EnumEditor;
            var w2 = DateEditor;
            var w3 = OfferDetailEditor;

            initFormType(OfferForm, [
                'CompanyName', w0,
                'State', w1,
                'OfferDate', w2,
                'ValueDate', w2,
                'Detail', w3
            ]);
        }
    }
}

[State]; // referenced types