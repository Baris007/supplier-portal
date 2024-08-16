import { fieldsProxy } from "@serenity-is/corelib";
import { OfferDetailRow } from "./OfferDetailRow";
import { SupplierRow } from "./SupplierRow";

export interface OfferRow {
    Id?: number;
    Supplier?: SupplierRow[];
    ItemId?: number;
    SupplierId?: number;
    Email?: string;
    State?: number;
    Detail?: OfferDetailRow[];
}

export abstract class OfferRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Email';
    static readonly localTextPrefix = 'Market.Offer';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<OfferRow>();
}