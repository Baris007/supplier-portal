import { fieldsProxy } from "@serenity-is/corelib";

export interface EmailRow {
    Id?: number;
    OfferSupplierId?: number;
    OfferId?: number;
    IsSended?: boolean;
    IsAutoSended?: boolean;
}

export abstract class EmailRow {
    static readonly idProperty = 'Id';
    static readonly localTextPrefix = 'ScheduledEmail.Email';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<EmailRow>();
}