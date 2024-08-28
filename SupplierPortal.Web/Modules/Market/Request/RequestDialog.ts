import { OfferDetailRow, RequestForm, RequestRow, RequestService } from '@/ServerTypes/Market';
import { Decorators, EntityDialog, tryGetText } from '@serenity-is/corelib';
@Decorators.panel()
@Decorators.registerClass('SupplierPortal.Market.RequestDialog')
export class RequestDialog extends EntityDialog<RequestRow, any> {
    protected getFormKey() { return RequestForm.formKey; }
    protected getRowDefinition() { return RequestRow; }
    protected getService() { return RequestService.baseUrl; }

    protected form = new RequestForm(this.idPrefix);
    protected afterLoadEntity() {
        super.afterLoadEntity();
        RequestService.GetContextInfo({}, resp => {
            this.form.EMail.value = resp.UserEmail;
        }, {async: false});
    }
    //protected form = new RequestForm(this.idPrefix);
    //constructor(prop: any) {
    //    super(prop);
    //    this.form.OfferId.change(e => {
    //        debugger;
    //        var detaillist = this.form.OfferId.getItems();
    //        var subTotal;
    //        for (let item of detaillist) {
    //            subTotal += item.TotalPrice
    //        }
    //        this.form.SubTotal.value = subTotal;
    //    });

    //}
}
