import { OffersForm, OffersRow, OffersService } from '@/ServerTypes/Item';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('SupplierPortal.Item.OffersDialog')
export class OffersDialog extends EntityDialog<OffersRow, any> {
    protected getFormKey() { return OffersForm.formKey; }
    protected getRowDefinition() { return OffersRow; }
    protected getService() { return OffersService.baseUrl; }

    protected form = new OffersForm(this.idPrefix);
}