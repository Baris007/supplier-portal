import { OffersColumns, OffersRow, OffersService } from '@/ServerTypes/Portal';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { OffersDialog } from './OffersDialog';

@Decorators.registerClass('SupplierPortal.Portal.OffersGrid')
export class OffersGrid extends EntityGrid<OffersRow> {
    protected getColumnsKey() { return OffersColumns.columnsKey; }
    protected getDialogType() { return OffersDialog; }
    protected getRowDefinition() { return OffersRow; }
    protected getService() { return OffersService.baseUrl; }
}