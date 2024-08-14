import { SupplierForm, SupplierRow, SupplierService } from '@/ServerTypes/Item';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('SupplierPortal.Item.SupplierDialog')
export class SupplierDialog extends EntityDialog<SupplierRow, any> {
    protected getFormKey() { return SupplierForm.formKey; }
    protected getRowDefinition() { return SupplierRow; }
    protected getService() { return SupplierService.baseUrl; }

    protected form = new SupplierForm(this.idPrefix);
}