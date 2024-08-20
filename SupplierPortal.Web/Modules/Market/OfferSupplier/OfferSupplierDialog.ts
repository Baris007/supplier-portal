import { OfferSupplierForm, OfferSupplierRow, OfferSupplierService } from '@/ServerTypes/Market';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('SupplierPortal.Market.OfferSupplierDialog')
export class OfferSupplierDialog extends EntityDialog<OfferSupplierRow, any> {
    protected getFormKey() { return OfferSupplierForm.formKey; }
    protected getRowDefinition() { return OfferSupplierRow; }
    protected getService() { return OfferSupplierService.baseUrl; }

    protected form = new OfferSupplierForm(this.idPrefix);
}