import { OfferDetailForm, OfferDetailRow, OfferDetailService } from '@/ServerTypes/Market';
import { Decorators } from '@serenity-is/corelib';
import { GridEditorDialog } from '@serenity-is/extensions';

@Decorators.registerClass('SupplierPortal.Market.OfferDetailDialog')
export class OfferDetailDialog extends GridEditorDialog<OfferDetailRow> {
    protected getFormKey() { return OfferDetailForm.formKey; }
    protected getRowDefinition() { return OfferDetailRow; }
    //protected getService() { return OfferDetailService.baseUrl; }

    protected form = new OfferDetailForm(this.idPrefix);
}