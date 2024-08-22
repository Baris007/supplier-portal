import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { OfferRow } from "./OfferRow";

export interface OfferColumns {
    Id: Column<OfferRow>;
    State: Column<OfferRow>;
}

export class OfferColumns extends ColumnsBase<OfferRow> {
    static readonly columnsKey = 'Market.Offer';
    static readonly Fields = fieldsProxy<OfferColumns>();
}