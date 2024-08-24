import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { OfferDetailColumns, OfferDetailRow } from "@/ServerTypes/Market";
import { OfferDetailDialog } from "./OfferDetailDialog";
import { ItemRow } from "../../ServerTypes/Inventory";


@Decorators.registerEditor("SupplierPortal.Market.OfferDetailEditor")
export class OfferDetailEditor extends GridEditorBase<OfferDetailRow> {
    protected getColumnsKey() { return OfferDetailColumns.columnsKey; }
    protected getDialogType() { return OfferDetailDialog; }
    protected getLocalTextPrefix() { return OfferDetailRow.localTextPrefix; }

    constructor(container) {
        super(container);
    }

    protected getAddButtonCaption() {
        return "Add Offer Detail";
    }
    protected validateEntity(row: OfferDetailRow, id: number) {
        if (!super.validateEntity(row, id))
            return false;

        var itemId = id ?? row[this.getIdProperty()];
        //ItemRow.getLookupAsync().then(x => {
        //    var item = this.view?.getItemById(itemId);
        //    if (item) {
        //        item.ItemName = x.itemById[row.ItemId].ItemName;
        //        this.view.updateItem(itemId, item);
        //    }
        //});

        return true;
    }

}