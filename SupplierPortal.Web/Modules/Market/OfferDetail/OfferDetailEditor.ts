import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { OfferDetailRow } from "../../ServerTypes/Market";



@Decorators.registerEditor("'SupplierPortal.Market.OfferDetailEditor")
export class OfferDetailEditor extends GridEditorBase<OfferDetailRow> {
    protected getColumnsKey() { return OfferDetailColumns.columnsKey; }
    protected getDialogType() { return OfferDetailEditDialog; }
    protected getLocalTextPrefix() { return OfferDetailRow.localTextPrefix; }

    constructor(container: JQuery) {
        super(container);
    }

    protected getAddButtonCaption() {
        return "Add";
    }
    protected validateEntity(row: OfferDetailRow, id: number) {
        if (!super.validateEntity(row, id))
            return false;

        var itemId = id ?? row[this.getIdProperty()];
        PersonRow.getLookupAsync().then(x => {
            var item = this.view?.getItemById(itemId);
            if (item) {
                item.PersonFullName = x.itemById[row.PersonId].FullName;
                this.view.updateItem(itemId, item);
            }
        });

        return true;
    }
}
