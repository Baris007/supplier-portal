import { fieldsProxy } from "@serenity-is/corelib";

export interface ItemRow {
    Id?: number;
    ItemCode?: string;
    ItemName?: string;
}

export abstract class ItemRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'ItemCode';
    static readonly localTextPrefix = 'Inventory.Item';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ItemRow>();
}