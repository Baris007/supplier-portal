import { fieldsProxy } from "@serenity-is/corelib";

export interface OfferSupplierRow {
    Id?: number;
    SupplierId?: number;
    OfferId?: number;
}

export abstract class OfferSupplierRow {
    static readonly idProperty = 'Id';
    static readonly localTextPrefix = 'Market.OfferSupplier';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<OfferSupplierRow>();
}