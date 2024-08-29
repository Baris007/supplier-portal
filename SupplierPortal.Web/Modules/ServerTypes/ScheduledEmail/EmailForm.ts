import { PrefixedContext, initFormType } from "@serenity-is/corelib";
import { IntegerEditor, BooleanEditor } from "serenity.corelib";

export interface EmailForm {
    OfferSupplierId: IntegerEditor;
    OfferId: IntegerEditor;
    IsSended: BooleanEditor;
    IsAutoSended: BooleanEditor;
}

export class EmailForm extends PrefixedContext {
    static readonly formKey = 'ScheduledEmail.Email';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!EmailForm.init)  {
            EmailForm.init = true;

            var w0 = IntegerEditor;
            var w1 = BooleanEditor;

            initFormType(EmailForm, [
                'OfferSupplierId', w0,
                'OfferId', w0,
                'IsSended', w1,
                'IsAutoSended', w1
            ]);
        }
    }
}