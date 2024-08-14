﻿import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { OffersRow } from "./OffersRow";

export interface OffersColumns {
    Id: Column<OffersRow>;
    Amount: Column<OffersRow>;
    ItemItemName: Column<OffersRow>;
    SupplierCompanyName: Column<OffersRow>;
}

export class OffersColumns extends ColumnsBase<OffersRow> {
    static readonly columnsKey = 'Portal.Offers';
    static readonly Fields = fieldsProxy<OffersColumns>();
}