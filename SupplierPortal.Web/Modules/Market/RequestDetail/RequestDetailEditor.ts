import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { RequestDetailColumns, RequestDetailRow } from "@/ServerTypes/Market";
import { RequestDetailDialog } from "./RequestDetailDialog";


@Decorators.registerEditor("SupplierPortal.Market.RequestDetailEditor")
export class RequestDetailEditor extends GridEditorBase<RequestDetailRow> {
    protected getColumnsKey() { return RequestDetailColumns.columnsKey; }
    protected getDialogType() { return RequestDetailDialog; }
    protected getLocalTextPrefix() { return RequestDetailRow.localTextPrefix; }

    //protected validateEntity(row: RequestDetailRow, id: number) {
    //    if (!super.validateEntity(row, id))
    //        return false;
    //    var itemId = id ?? row[this.getIdProperty()];


    //    ItemRow.getLookupAsync().then(x => {
    //        var item = this.view?.getItemById(itemId);
    //        if (item) {
    //            item.ItemName = x.itemById[row.ItemId].ItemName;
    //            this.view.updateItem(itemId, item);
    //        }
    //    });

    //    return true;
    //}
    constructor(container) {
        super(container);
    }

}


