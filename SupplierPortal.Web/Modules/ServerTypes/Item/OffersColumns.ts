import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { OffersRow } from "./OffersRow";

export interface OffersColumns {
    Id: Column<OffersRow>;
    ItemCode: Column<OffersRow>;
    ItemName: Column<OffersRow>;
    CompanyName: Column<OffersRow>;
    Email: Column<OffersRow>;
    State: Column<OffersRow>;
    ItemItemName: Column<OffersRow>;
    SupplierCompanyName: Column<OffersRow>;
}

export class OffersColumns extends ColumnsBase<OffersRow> {
    static readonly columnsKey = 'Item.Offers';
    static readonly Fields = fieldsProxy<OffersColumns>();
}