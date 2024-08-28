import { RequestColumns, RequestRow, RequestService } from '@/ServerTypes/Market';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { RequestDialog } from './RequestDialog';

@Decorators.registerClass('SupplierPortal.Market.RequestGrid')
export class RequestGrid extends EntityGrid<RequestRow> {
    protected getColumnsKey() { return RequestColumns.columnsKey; }
    protected getDialogType() { return RequestDialog; }
    protected getRowDefinition() { return RequestRow; }
    protected getService() { return RequestService.baseUrl; }
    protected getAddButtonCaption() {
        return "Add New Regust";
    }
}