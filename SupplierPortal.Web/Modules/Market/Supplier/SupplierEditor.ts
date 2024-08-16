import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { SupplierColumns, SupplierRow } from "../../ServerTypes/Market";

@Decorators.registerEditor("SupplierPortal.Market.SupplierEditor")
export class SupplierEditor extends GridEditorBase<SupplierRow> {
    protected getColumnsKey() { return SupplierColumns.columnsKey }
    protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }

    constructor(container: JQuery) {
        super(container);
    }
}