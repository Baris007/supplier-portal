import { ItemsColumns, ItemsRow, ItemsService } from '@/ServerTypes/İtem';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ItemsDialog } from './ItemsDialog';

@Decorators.registerClass('SupplierPortal.İtem.ItemsGrid')
export class ItemsGrid extends EntityGrid<ItemsRow> {
    protected getColumnsKey() { return ItemsColumns.columnsKey; }
    protected getDialogType() { return ItemsDialog; }
    protected getRowDefinition() { return ItemsRow; }
    protected getService() { return ItemsService.baseUrl; }
}