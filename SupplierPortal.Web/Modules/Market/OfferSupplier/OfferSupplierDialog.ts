import { OfferSupplierForm, OfferSupplierRow, OfferSupplierService } from '@/ServerTypes/Market';
import { Decorators, EntityDialog, EntityGrid } from '@serenity-is/corelib';
import { GridEditorDialog } from '@serenity-is/extensions';

@Decorators.registerClass('SupplierPortal.Market.OfferSupplierDialog')
export class OfferSupplierDialog extends EntityDialog<OfferSupplierRow> {
    protected getFormKey() { return OfferSupplierForm.formKey; }
    protected getRowDefinition() { return OfferSupplierRow; }
    protected getService() { return OfferSupplierService.baseUrl; }

    protected form: OfferSupplierForm = new OfferSupplierForm(this.idPrefix);
}