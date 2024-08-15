import { OfferDetailForm, OfferDetailRow, OfferDetailService } from '@/ServerTypes/Market';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('SupplierPortal.Market.OfferDetailDialog')
export class OfferDetailDialog extends EntityDialog<OfferDetailRow, any> {
    protected getFormKey() { return OfferDetailForm.formKey; }
    protected getRowDefinition() { return OfferDetailRow; }
    protected getService() { return OfferDetailService.baseUrl; }

    protected form = new OfferDetailForm(this.idPrefix);
}