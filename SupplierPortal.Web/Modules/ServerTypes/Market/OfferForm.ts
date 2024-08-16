import { OfferDetailEditor } from "@/Market/OfferDetail/OfferDetailEditor";
import { SupplierEditor } from "@/Market/Supplier/SupplierEditor";
import { IntegerEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OfferForm {
    Supplier: SupplierEditor;
    ItemId: IntegerEditor;
    SupplierId: IntegerEditor;
    Email: StringEditor;
    State: IntegerEditor;
    Detail: OfferDetailEditor;
    Id: IntegerEditor;
}

export class OfferForm extends PrefixedContext {
    static readonly formKey = 'Market.Offer';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OfferForm.init)  {
            OfferForm.init = true;

            var w0 = SupplierEditor;
            var w1 = IntegerEditor;
            var w2 = StringEditor;
            var w3 = OfferDetailEditor;

            initFormType(OfferForm, [
                'Supplier', w0,
                'ItemId', w1,
                'SupplierId', w1,
                'Email', w2,
                'State', w1,
                'Detail', w3,
                'Id', w1
            ]);
        }
    }
}