import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { OfferSupplierColumns, OfferSupplierRow, SupplierRow } from "@/ServerTypes/Market";
import { OfferSupplierEditDialog } from "./OfferSupplierEditDialog";


@Decorators.registerEditor("SupplierPortal.Market.OfferSupplierEditor")
export class OfferSupplierEditor extends GridEditorBase<OfferSupplierRow> {
    protected getColumnsKey() { return OfferSupplierColumns.columnsKey; }
    protected getLocalTextPrefix() { return OfferSupplierRow.localTextPrefix; }
    protected getDialogType() { return OfferSupplierEditDialog; }

    //constructor(container) {
    //    super(container);
     protected validateEntity(row: OfferSupplierRow, id: number) {
        if (!super.validateEntity(row, id))
            return false;

        var itemId = id ?? row[this.getIdProperty()];
        //SupplierRow.getLookupAsync().then(x => {
        //    var item = this.view?.getItemById(itemId);
        //    if (item) {
        //        item.CompanyName = x.itemById[row.SupplierId].CompanyName;
        //        this.view.updateItem(itemId, item);
        //    }
        //});

        return true;
    }

    protected getAddButtonCaption() {
        return "Add Supplier";
    } 
}