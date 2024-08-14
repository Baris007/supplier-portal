import { OffersColumns, OffersRow, OffersService } from '@/ServerTypes/Item';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { OffersDialog } from './OffersDialog';

@Decorators.registerClass('SupplierPortal.Item.OffersGrid')
export class OffersGrid extends EntityGrid<OffersRow> {
    protected getColumnsKey() { return OffersColumns.columnsKey; }
    protected getDialogType() { return OffersDialog; }
    protected getRowDefinition() { return OffersRow; }
    protected getService() { return OffersService.baseUrl; }
}