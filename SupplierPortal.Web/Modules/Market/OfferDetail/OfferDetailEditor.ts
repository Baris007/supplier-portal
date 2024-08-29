import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { Currency, OfferDetailColumns, OfferDetailRow } from "@/ServerTypes/Market";
import { ItemRow } from "../../ServerTypes/Inventory";
import { OfferDetailDialog } from "./OfferDetailDialog";


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

        //var KDVId = id ?? row[this.getIdProperty()];
        //ItemRow.getLookupAsync().then(x => {
        //    var KDV = this.view?.getItemById(KDVId);
        //    if (KDV) {
        //        KDV.Kdv = x.itemById[row.ItemId].KDV;
        //        this.view.updateItem(KDVId, KDV);
        //    }
        //})
        ItemRow.getLookupAsync().then(x => {
            var item = this.view?.getItemById(itemId);
            if (item) {
                item.ItemName = x.itemById[row.ItemId].ItemName;
                this.view.updateItem(itemId, item);
            }
        });

        return true;
    }
}