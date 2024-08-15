import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ItemRow } from "./ItemRow";

export interface ItemColumns {
    Id: Column<ItemRow>;
    ItemCode: Column<ItemRow>;
    ItemName: Column<ItemRow>;
}

export class ItemColumns extends ColumnsBase<ItemRow> {
    static readonly columnsKey = 'Market.Item';
    static readonly Fields = fieldsProxy<ItemColumns>();
}