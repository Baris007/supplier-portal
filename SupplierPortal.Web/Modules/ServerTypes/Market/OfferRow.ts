import { fieldsProxy } from "@serenity-is/corelib";
<<<<<<< HEAD

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
=======
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
>>>>>>> Zeki
}

export abstract class OfferRow {
    static readonly idProperty = 'Id';
<<<<<<< HEAD
    static readonly nameProperty = 'ItemName';
=======
    static readonly nameProperty = 'Email';
>>>>>>> Zeki
    static readonly localTextPrefix = 'Market.Offer';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<OfferRow>();
}