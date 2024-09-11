import { OfferDetailRow, OfferForm, OfferRow, OfferService } from '@/ServerTypes/Market';
import { Decorators, EntityDialog, ToolButton } from '@serenity-is/corelib';

@Decorators.panel()
@Decorators.registerClass('SupplierPortal.Market.OfferDialog')
export class OfferDialog extends EntityDialog<OfferRow, any> {
    protected getFormKey() { return OfferForm.formKey; }
    protected getRowDefinition() { return OfferRow; }
    protected getService() { return OfferService.baseUrl; }
    protected form = new OfferForm(this.idPrefix);
    //protected afterLoadEntity() {
    //    super.afterLoadEntity();
    //    OfferService.GetContextInfo({}, resp => {
    //        this.form.Email.value = resp.
    ;
    //    }, {async: false});
    //}
}