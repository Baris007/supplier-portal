import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { OfferRow } from "./OfferRow";

export interface OfferColumns {
    Id: Column<OfferRow>;
<<<<<<< HEAD
    Amount: Column<OfferRow>;
    ItemName: Column<OfferRow>;
    CompanyName: Column<OfferRow>;
    Email: Column<OfferRow>;
    State: Column<OfferRow>;
    ItemItemName: Column<OfferRow>;
    SupplierCompanyName: Column<OfferRow>;
=======
    ItemId: Column<OfferRow>;
    SupplierId: Column<OfferRow>;
    Email: Column<OfferRow>;
    State: Column<OfferRow>;
>>>>>>> Zeki
}

export class OfferColumns extends ColumnsBase<OfferRow> {
    static readonly columnsKey = 'Market.Offer';
    static readonly Fields = fieldsProxy<OfferColumns>();
}