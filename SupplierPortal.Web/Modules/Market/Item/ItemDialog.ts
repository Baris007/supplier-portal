import { ItemForm, ItemRow, ItemService } from '@/ServerTypes/Market';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('SupplierPortal.Market.ItemDialog')
export class ItemDialog extends EntityDialog<ItemRow, any> {
    protected getFormKey() { return ItemForm.formKey; }
    protected getRowDefinition() { return ItemRow; }
    protected getService() { return ItemService.baseUrl; }

    protected form = new ItemForm(this.idPrefix);
}