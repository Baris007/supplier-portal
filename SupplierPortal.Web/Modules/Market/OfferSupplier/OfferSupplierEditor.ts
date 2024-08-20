
import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { OfferSupplierColumns, OfferSupplierRow } from "../../ServerTypes/Market";
import { OfferSupplierDialog } from "./OfferSupplierDialog";

@Decorators.registerEditor("SupplierPortal.Market.OfferSupplierEditor")
export class OfferSupplierEditor extends GridEditorBase<OfferSupplierRow> {
    protected getColumnsKey() { return OfferSupplierColumns.columnsKey }
    protected getLocalTextPrefix() { return OfferSupplierRow.localTextPrefix; }
    getDialogType() { return OfferSupplierDialog; }

    constructor(container) {
        super(container);
    }
}