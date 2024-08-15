import { StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface SupplierForm {
    CompanyName: StringEditor;
    Email: StringEditor;
}

export class SupplierForm extends PrefixedContext {
    static readonly formKey = 'Market.Supplier';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SupplierForm.init)  {
            SupplierForm.init = true;

            var w0 = StringEditor;

            initFormType(SupplierForm, [
                'CompanyName', w0,
                'Email', w0
            ]);
        }
    }
}