import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { OfferDetailColumns, OfferDetailRow } from "../../ServerTypes/Market";
import { OfferDetailDialog } from "./OfferDetailDialog";

@Decorators.registerEditor("SupplierPortal.Market.OfferDetailEditor")
export class OfferDetailEditor extends GridEditorBase<OfferDetailRow> {
    protected getColumnsKey() { return OfferDetailColumns.columnsKey }
    protected getLocalTextPrefix() { return OfferDetailRow.localTextPrefix; }
    getDialogType() { return OfferDetailDialog; }

    constructor(container) {
        super(container);
    }
}