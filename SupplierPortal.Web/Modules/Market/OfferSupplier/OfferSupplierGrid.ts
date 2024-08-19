import { OfferSupplierColumns, OfferSupplierRow, OfferSupplierService } from '@/ServerTypes/Market';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { OfferSupplierDialog } from './OfferSupplierDialog';

@Decorators.registerClass('SupplierPortal.Market.OfferSupplierGrid')
export class OfferSupplierGrid extends EntityGrid<OfferSupplierRow> {
    protected getColumnsKey() { return OfferSupplierColumns.columnsKey; }
    protected getDialogType() { return OfferSupplierDialog; }
    protected getRowDefinition() { return OfferSupplierRow; }
    protected getService() { return OfferSupplierService.baseUrl; }
}