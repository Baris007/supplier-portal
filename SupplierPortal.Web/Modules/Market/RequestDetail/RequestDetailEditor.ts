import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { RequestDetailColumns, RequestDetailRow } from "@/ServerTypes/Market";
import { RequestDetailDialog } from "./RequestDetailDialog";


@Decorators.registerEditor("SupplierPortal.Market.RequestDetailEditor")
export class RequestDetailEditor extends GridEditorBase<RequestDetailRow> {
    protected getColumnsKey() { return RequestDetailColumns.columnsKey; }
    protected getDialogType() { return RequestDetailDialog; }
    protected getLocalTextPrefix() { return RequestDetailRow.localTextPrefix; }


    constructor(container) {
        super(container);
    }

}


