import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { KDV } from "./Enum.KDV";
import { ItemRow } from "./ItemRow";

export interface ItemColumns {
    Id: Column<ItemRow>;
    ItemCode: Column<ItemRow>;
    ItemName: Column<ItemRow>;
    KDV: Column<ItemRow>;
    Unit: Column<ItemRow>;
}

export class ItemColumns extends ColumnsBase<ItemRow> {
    static readonly columnsKey = 'Inventory.Item';
    static readonly Fields = fieldsProxy<ItemColumns>();
}

[KDV]; // referenced types