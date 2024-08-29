import { RequestDetailColumns, RequestDetailRow, RequestDetailService } from '@/ServerTypes/Market';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { RequestDetailDialog } from './RequestDetailDialog';

@Decorators.registerClass('SupplierPortal.Market.RequestDetailGrid')
export class RequestDetailGrid extends EntityGrid<RequestDetailRow> {
    protected getColumnsKey() { return RequestDetailColumns.columnsKey; }
    protected getDialogType() { return RequestDetailDialog; }
    protected getRowDefinition() { return RequestDetailRow; }
    protected getService() { return RequestDetailService.baseUrl; }
}