import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { SupplierColumns, SupplierRow } from "../../ServerTypes/Market";
import { SupplierDialog } from "./SupplierDialog";

@Decorators.registerEditor("SupplierPortal.Market.SupplierEditor")
export class SupplierEditor extends GridEditorBase<SupplierRow> {
    protected getColumnsKey() { return SupplierColumns.columnsKey }
    protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }
    getDialogType() { return SupplierDialog; }

    constructor(container) {
        super(container);
    }
}