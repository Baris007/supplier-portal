import { fieldsProxy } from "@serenity-is/corelib";

export interface SupplierRow {
    Id?: number;
    CompanyName?: string;
    Email?: string;
}

export abstract class SupplierRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'CompanyName';
    static readonly localTextPrefix = 'Item.Supplier';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SupplierRow>();
}