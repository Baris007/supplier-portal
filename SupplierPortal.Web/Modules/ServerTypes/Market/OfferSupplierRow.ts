import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface OfferSupplierRow {
    Id?: number;
    SupplierId?: number;
    OfferId?: number;
    CompanyName?: string;
    Email?: string;
    OfficalName?: string;
    OfficalSurname?: string;
    CallNumber?: string;
}

export abstract class OfferSupplierRow {
    static readonly idProperty = 'Id';
    static readonly localTextPrefix = 'Market.OfferSupplier';
    static readonly lookupKey = 'Market.OfferSupplier';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<OfferSupplierRow>('Market.OfferSupplier') }
    static async getLookupAsync() { return getLookupAsync<OfferSupplierRow>('Market.OfferSupplier') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<OfferSupplierRow>();
}