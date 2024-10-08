import { ItemColumns, ItemRow, ItemService } from '@/ServerTypes/Inventory';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ItemDialog } from './ItemDialog';

@Decorators.registerClass('SupplierPortal.Inventory.ItemGrid')
export class ItemGrid extends EntityGrid<ItemRow> {
    protected getColumnsKey() { return ItemColumns.columnsKey; }
    protected getDialogType() { return ItemDialog; }
    protected getRowDefinition() { return ItemRow; }
    protected getService() { return ItemService.baseUrl; }

    protected getAddButtonCaption() {
        return "Add New Item";
    }
}