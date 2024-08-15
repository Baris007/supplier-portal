import { OfferForm, OfferRow, OfferService } from '@/ServerTypes/Market';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('SupplierPortal.Market.OfferDialog')
export class OfferDialog extends EntityDialog<OfferRow, any> {
    protected getFormKey() { return OfferForm.formKey; }
    protected getRowDefinition() { return OfferRow; }
    protected getService() { return OfferService.baseUrl; }

    protected form = new OfferForm(this.idPrefix);
}