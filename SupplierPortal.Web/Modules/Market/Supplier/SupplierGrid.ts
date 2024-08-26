import { SupplierColumns, SupplierRow, SupplierService } from '@/ServerTypes/Market';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { SupplierDialog } from './SupplierDialog';

@Decorators.registerClass('SupplierPortal.Market.SupplierGrid')
export class SupplierGrid extends EntityGrid<SupplierRow> {
    protected getColumnsKey() { return SupplierColumns.columnsKey; }
    protected getDialogType() { return SupplierDialog; }
    protected getRowDefinition() { return SupplierRow; }
    protected getService() { return SupplierService.baseUrl; }

    protected getAddButtonCaption() {
        return "Add New Supplier";
    }
}