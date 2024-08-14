import { IntegerEditor, StringEditor, ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface OffersForm {
    ItemCode: IntegerEditor;
    ItemName: StringEditor;
    CompanyName: StringEditor;
    Email: StringEditor;
    State: StringEditor;
    ItemId: ServiceLookupEditor;
    SupplierId: ServiceLookupEditor;
}

export class OffersForm extends PrefixedContext {
    static readonly formKey = 'Item.Offers';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OffersForm.init)  {
            OffersForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;
            var w2 = ServiceLookupEditor;

            initFormType(OffersForm, [
                'ItemCode', w0,
                'ItemName', w1,
                'CompanyName', w1,
                'Email', w1,
                'State', w1,
                'ItemId', w2,
                'SupplierId', w2
            ]);
        }
    }
}