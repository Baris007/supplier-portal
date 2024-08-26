import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface ItemRow {
    Id?: number;
    ItemCode?: string;
    ItemName?: string;
}

export abstract class ItemRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'ItemName';
    static readonly localTextPrefix = 'Inventory.Item';
    static readonly lookupKey = 'Inventory.Item';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<ItemRow>('Inventory.Item') }
    static async getLookupAsync() { return getLookupAsync<ItemRow>('Inventory.Item') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ItemRow>();
}