import { fieldsProxy } from "@serenity-is/corelib";
import { OfferDetailRow } from "./OfferDetailRow";
import { OfferSupplierRow } from "./OfferSupplierRow";

export interface OfferRow {
    Id?: number;
    CompanyName?: OfferSupplierRow[];
    State?: number;
    Detail?: OfferDetailRow[];
}

export abstract class OfferRow {
    static readonly idProperty = 'Id';
    static readonly localTextPrefix = 'Market.Offer';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<OfferRow>();
}