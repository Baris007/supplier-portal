import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ItemRow } from "./ItemRow";

export interface ItemColumns {
    Id: Column<ItemRow>;
    ItemId: Column<ItemRow>;
    ItemName: Column<ItemRow>;
}

export class ItemColumns extends ColumnsBase<ItemRow> {
    static readonly columnsKey = 'Items.Item';
    static readonly Fields = fieldsProxy<ItemColumns>();
}