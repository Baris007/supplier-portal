import { IntegerEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface ItemForm {
    ItemId: IntegerEditor;
    ItemName: StringEditor;
}

export class ItemForm extends PrefixedContext {
    static readonly formKey = 'Items.Item';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ItemForm.init)  {
            ItemForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(ItemForm, [
                'ItemId', w0,
                'ItemName', w1
            ]);
        }
    }
}