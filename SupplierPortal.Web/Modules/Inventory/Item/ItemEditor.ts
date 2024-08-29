//import { Decorators } from "@serenity-is/corelib";
//import { GridEditorBase } from "@serenity-is/extensions";
//import { ItemRow } from "../../ServerTypes/Inventory";
//import { ItemDialog } from "./ItemDialog";


//@Decorators.registerEditor("SupplierPortal.Market.ItemEditor")
//export class ItemEditor extends GridEditorBase<ItemRow> {
//    protected getColumnsKey() { return ItemColumns.columnsKey; }
//    protected getDialogType() { return ItemDialog; }
//    protected getLocalTextPrefix() { return ItemRow.localTextPrefix; }

//    constructor(container) {
//        super(container);
//    }

//    protected getAddButtonCaption() {
//        return "Add Offer Detail";
//    }
//    protected validateEntity(row: ItemRow, id: number) {
//        if (!super.validateEntity(row, id))
//            return false;

//        var itemId = id ?? row[this.getIdProperty()];
//        ItemRow.getLookupAsync().then(x => {
//            var item = this.view?.getItemById(itemId);
//            if (item) {
//                item.ItemName = x.itemById[row.ItemId].ItemName;
//                this.view.updateItem(itemId, item);
//            }
//        });

//        return true;
//    }

//}