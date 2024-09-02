import { OfferDetailEditor } from "@/Market/OfferDetail/OfferDetailEditor";
import { OfferSupplierEditor } from "@/Market/OfferSupplier/OfferSupplierEditor";
import { DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferForm {
    CompanyName: OfferSupplierEditor;
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
            var w1 = DateEditor;
            var w2 = OfferDetailEditor;

            initFormType(OfferForm, [
                'CompanyName', w0,
                'OfferDate', w1,
                'ValueDate', w1,
                'Detail', w2
            ]);
        }
    }
}