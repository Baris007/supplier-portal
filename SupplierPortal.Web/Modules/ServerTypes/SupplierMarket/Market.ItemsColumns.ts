import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ItemsRow } from "./Market.ItemsRow";

export interface ItemsColumns {
    Id: Column<ItemsRow>;
    Amount: Column<ItemsRow>;
    ItemName: Column<ItemsRow>;
}

export class ItemsColumns extends ColumnsBase<ItemsRow> {
    static readonly columnsKey = 'Market.Item';
    static readonly Fields = fieldsProxy<ItemsColumns>();
}