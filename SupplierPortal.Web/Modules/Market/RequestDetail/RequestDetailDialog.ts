import { RequestDetailForm, RequestDetailRow, RequestDetailService } from '@/ServerTypes/Market';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('SupplierPortal.Market.RequestDetailDialog')
export class RequestDetailDialog extends EntityDialog<RequestDetailRow, any> {
    protected getFormKey() { return RequestDetailForm.formKey; }
    protected getRowDefinition() { return RequestDetailRow; }
    protected getService() { return RequestDetailService.baseUrl; }

    protected form = new RequestDetailForm(this.idPrefix);
}