import { IntegerEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface ItemsForm {
    ItemCode: IntegerEditor;
    ItemName: StringEditor;
}

export class ItemsForm extends PrefixedContext {
    static readonly formKey = 'Portal.Items';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ItemsForm.init)  {
            ItemsForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(ItemsForm, [
                'ItemCode', w0,
                'ItemName', w1
            ]);
        }
    }
}