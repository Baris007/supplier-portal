import { IntegerEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface ItemForm {
    ItemCode: IntegerEditor;
    ItemName: StringEditor;
}

export class ItemForm extends PrefixedContext {
    static readonly formKey = 'Market.Item';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ItemForm.init)  {
            ItemForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(ItemForm, [
                'ItemCode', w0,
                'ItemName', w1
            ]);
        }
    }
}