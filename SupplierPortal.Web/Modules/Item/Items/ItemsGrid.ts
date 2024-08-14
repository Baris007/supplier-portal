import { ItemsColumns, ItemsRow, ItemsService } from '@/ServerTypes/Item';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ItemsDialog } from './ItemsDialog';

@Decorators.registerClass('SupplierPortal.Item.ItemsGrid')
export class ItemsGrid extends EntityGrid<ItemsRow> {
    protected getColumnsKey() { return ItemsColumns.columnsKey; }
    protected getDialogType() { return ItemsDialog; }
    protected getRowDefinition() { return ItemsRow; }
    protected getService() { return ItemsService.baseUrl; }
}