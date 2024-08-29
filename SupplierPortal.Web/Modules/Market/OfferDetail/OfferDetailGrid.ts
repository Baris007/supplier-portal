import { OfferDetailColumns, OfferDetailRow, OfferDetailService } from '@/ServerTypes/Market';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { OfferDetailDialog } from './OfferDetailDialog';

@Decorators.registerClass('SupplierPortal.Market.OfferDetailGrid')
export class OfferDetailGrid extends EntityGrid<OfferDetailRow> {
    protected getColumnsKey() { return OfferDetailColumns.columnsKey; }
    protected getDialogType() { return OfferDetailDialog; }
    protected getRowDefinition() { return OfferDetailRow; }
    protected getService() { return OfferDetailService.baseUrl; }
}