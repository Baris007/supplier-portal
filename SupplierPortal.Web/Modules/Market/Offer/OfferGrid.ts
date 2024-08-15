import { OfferColumns, OfferRow, OfferService } from '@/ServerTypes/Market';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { OfferDialog } from './OfferDialog';

@Decorators.registerClass('SupplierPortal.Market.OfferGrid')
export class OfferGrid extends EntityGrid<OfferRow> {
    protected getColumnsKey() { return OfferColumns.columnsKey; }
    protected getDialogType() { return OfferDialog; }
    protected getRowDefinition() { return OfferRow; }
    protected getService() { return OfferService.baseUrl; }
}