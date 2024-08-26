import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface OfferDetailRow {
    Id?: number;
    OfferId?: number;
    Quantity?: number;
    Price?: number;
    Description?: string;
    ItemId?: number;
    Curency?: string;
    Date?: string;
    TotalPrice?: number;
    ItemName?: string;
}

export abstract class OfferDetailRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Description';
    static readonly localTextPrefix = 'Market.OfferDetail';
    static readonly lookupKey = 'Market.OfferDetail';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<OfferDetailRow>('Market.OfferDetail') }
    static async getLookupAsync() { return getLookupAsync<OfferDetailRow>('Market.OfferDetail') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<OfferDetailRow>();
}