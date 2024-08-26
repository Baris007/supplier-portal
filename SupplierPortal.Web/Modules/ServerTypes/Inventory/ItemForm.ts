import { PrefixedContext, initFormType } from "@serenity-is/corelib";
import { StringEditor } from "serenity.corelib";

export interface ItemForm {
    ItemCode: StringEditor;
    ItemName: StringEditor;
}

export class ItemForm extends PrefixedContext {
    static readonly formKey = 'Inventory.Item';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ItemForm.init)  {
            ItemForm.init = true;

            var w0 = StringEditor;

            initFormType(ItemForm, [
                'ItemCode', w0,
                'ItemName', w0
            ]);
        }
    }
}