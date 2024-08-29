import { PrefixedContext, initFormType } from "@serenity-is/corelib";
import { StringEditor } from "serenity.corelib";

export interface SupplierForm {
    CompanyName: StringEditor;
    Email: StringEditor;
    OfficalName: StringEditor;
    OfficalSurname: StringEditor;
    CallNumber: StringEditor;
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
                'Email', w0,
                'OfficalName', w0,
                'OfficalSurname', w0,
                'CallNumber', w0
            ]);
        }
    }
}