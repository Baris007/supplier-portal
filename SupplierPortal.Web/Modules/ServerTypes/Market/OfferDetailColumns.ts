﻿import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { OfferDetailRow } from "./OfferDetailRow";

export interface OfferDetailColumns {
    Id: Column<OfferDetailRow>;
    OfferId: Column<OfferDetailRow>;
    ItemName: Column<OfferDetailRow>;
    Kdv: Column<OfferDetailRow>;
    Unit: Column<OfferDetailRow>;
    Quantity: Column<OfferDetailRow>;
    Price: Column<OfferDetailRow>;
    TotalPrice: Column<OfferDetailRow>;
    Description: Column<OfferDetailRow>;
    ItemId: Column<OfferDetailRow>;
    Date: Column<OfferDetailRow>;
}

export class OfferDetailColumns extends ColumnsBase<OfferDetailRow> {
    static readonly columnsKey = 'Market.OfferDetail';
    static readonly Fields = fieldsProxy<OfferDetailColumns>();
}