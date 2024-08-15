import { fieldsProxy } from "@serenity-is/corelib";

export interface OfferRow {
    Id?: number;
    Amount?: number;
    ItemName?: string;
    CompanyName?: string;
    Email?: string;
    State?: number[];
    ItemId?: number;
    SupplierId?: number;
    ItemItemName?: string;
    SupplierCompanyName?: string;
}

export abstract class OfferRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'ItemName';
    static readonly localTextPrefix = 'Market.Offer';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<OfferRow>();
}