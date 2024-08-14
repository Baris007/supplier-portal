import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SupplierRow } from "./SupplierRow";

export interface SupplierColumns {
    Id: Column<SupplierRow>;
    CompanyName: Column<SupplierRow>;
    Email: Column<SupplierRow>;
}

export class SupplierColumns extends ColumnsBase<SupplierRow> {
    static readonly columnsKey = 'Portal.Supplier';
    static readonly Fields = fieldsProxy<SupplierColumns>();
}