import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { OfferDetailRow } from "./OfferDetailRow";

export interface OfferDetailColumns {
    Id: Column<OfferDetailRow>;
    OfferEmail: Column<OfferDetailRow>;
    Quantity: Column<OfferDetailRow>;
    Description: Column<OfferDetailRow>;
    StatusDate: Column<OfferDetailRow>;
    Price: Column<OfferDetailRow>;
}

export class OfferDetailColumns extends ColumnsBase<OfferDetailRow> {
    static readonly columnsKey = 'Market.OfferDetail';
    static readonly Fields = fieldsProxy<OfferDetailColumns>();
}