import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ItemsRow } from "./ItemsRow";

export interface ItemsColumns {
    Id: Column<ItemsRow>;
    ItemCode: Column<ItemsRow>;
    ItemName: Column<ItemsRow>;
}

export class ItemsColumns extends ColumnsBase<ItemsRow> {
    static readonly columnsKey = 'İtem.Items';
    static readonly Fields = fieldsProxy<ItemsColumns>();
}