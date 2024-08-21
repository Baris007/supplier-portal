import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { OfferSupplierRow } from "./OfferSupplierRow";

export interface OfferSupplierColumns {
    Id: Column<OfferSupplierRow>;
    CompanyName: Column<OfferSupplierRow>;
    SupplierId: Column<OfferSupplierRow>;
    OfferId: Column<OfferSupplierRow>;
}

export class OfferSupplierColumns extends ColumnsBase<OfferSupplierRow> {
    static readonly columnsKey = 'Market.OfferSupplier';
    static readonly Fields = fieldsProxy<OfferSupplierColumns>();
}