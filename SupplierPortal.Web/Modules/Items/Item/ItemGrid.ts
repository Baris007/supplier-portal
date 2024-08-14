import { ItemColumns, ItemRow, ItemService } from '@/ServerTypes/Items';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ItemDialog } from './ItemDialog';

@Decorators.registerClass('SupplierPortal.Items.ItemGrid')
export class ItemGrid extends EntityGrid<ItemRow> {
    protected getColumnsKey() { return ItemColumns.columnsKey; }
    protected getDialogType() { return ItemDialog; }
    protected getRowDefinition() { return ItemRow; }
    protected getService() { return ItemService.baseUrl; }
    protected getButtons() {
        let buttons = super.getButtons()
        buttons.push({
            title: "mail",
            icon: "fa fa-address-book"
        })
        return buttons;
    }

}