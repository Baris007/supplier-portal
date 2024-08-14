import { ItemsForm, ItemsRow, ItemsService } from '@/ServerTypes/Portal';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('SupplierPortal.Portal.ItemsDialog')
export class ItemsDialog extends EntityDialog<ItemsRow, any> {
    protected getFormKey() { return ItemsForm.formKey; }
    protected getRowDefinition() { return ItemsRow; }
    protected getService() { return ItemsService.baseUrl; }

    protected form = new ItemsForm(this.idPrefix);
}