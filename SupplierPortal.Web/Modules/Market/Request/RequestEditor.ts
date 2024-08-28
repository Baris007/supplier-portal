import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { RequestColumns, RequestRow } from "@/ServerTypes/Market";
import { RequestDialog } from "./RequestDialog";
import { ItemRow } from "../../ServerTypes/Inventory";


@Decorators.registerEditor("SupplierPortal.Market.RequestEditor")
export class RequestEditor extends GridEditorBase<RequestRow> {
    protected getColumnsKey() { return RequestColumns.columnsKey; }
    protected getDialogType() { return RequestDialog; }
    protected getLocalTextPrefix() { return RequestRow.localTextPrefix; }

    constructor(container) {
        super(container);
    }

}