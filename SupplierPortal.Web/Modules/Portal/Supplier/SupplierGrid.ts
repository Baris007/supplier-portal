import { SupplierColumns, SupplierRow, SupplierService } from '@/ServerTypes/Portal';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { SupplierDialog } from './SupplierDialog';

@Decorators.registerClass('SupplierPortal.Portal.SupplierGrid')
export class SupplierGrid extends EntityGrid<SupplierRow> {
    protected getColumnsKey() { return SupplierColumns.columnsKey; }
    protected getDialogType() { return SupplierDialog; }
    protected getRowDefinition() { return SupplierRow; }
    protected getService() { return SupplierService.baseUrl; }
}