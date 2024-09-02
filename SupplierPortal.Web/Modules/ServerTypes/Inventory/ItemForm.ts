import { StringEditor, EnumEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { KDV } from "./Enum.KDV";
import { Unit } from "./Enum.Unit";

export interface ItemForm {
    ItemCode: StringEditor;
    ItemName: StringEditor;
    KDV: EnumEditor;
    Unit: EnumEditor;
}

export class ItemForm extends PrefixedContext {
    static readonly formKey = 'Inventory.Item';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ItemForm.init)  {
            ItemForm.init = true;

            var w0 = StringEditor;
            var w1 = EnumEditor;

            initFormType(ItemForm, [
                'ItemCode', w0,
                'ItemName', w0,
                'KDV', w1,
                'Unit', w1
            ]);
        }
    }
}

[KDV, Unit]; // referenced types