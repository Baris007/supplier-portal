﻿import { fieldsProxy } from "@serenity-is/corelib";

export interface OfferDetailRow {
    Id?: number;
    OfferId?: number;
    Quantity?: number;
    Description?: string;
    Price?: number;
}

export abstract class OfferDetailRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Description';
    static readonly localTextPrefix = 'Market.OfferDetail';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<OfferDetailRow>();
}