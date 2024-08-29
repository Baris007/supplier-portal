import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface SupplierRow {
    Id?: number;
    CompanyName?: string;
    Email?: string;
    OfficalName?: string;
    OfficalSurname?: string;
    CallNumber?: string;
}

export abstract class SupplierRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'CompanyName';
    static readonly localTextPrefix = 'Market.Supplier';
    static readonly lookupKey = 'Market.Supplier';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<SupplierRow>('Market.Supplier') }
    static async getLookupAsync() { return getLookupAsync<SupplierRow>('Market.Supplier') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SupplierRow>();
}