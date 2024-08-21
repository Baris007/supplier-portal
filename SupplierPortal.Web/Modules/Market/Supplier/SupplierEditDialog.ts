import { OfferSupplierRow, SupplierForm, SupplierRow, SupplierService } from '@/ServerTypes/Market';
import { Decorators } from '@serenity-is/corelib';
import { GridEditorDialog } from '@serenity-is/extensions';

@Decorators.registerClass('SupplierPortal.Market.SupplierDialog')
export class SupplierDialog extends GridEditorDialog<SupplierRow> {
    view: any;
    protected getFormKey() { return SupplierForm.formKey; }
    protected getRowDefinition() { return SupplierRow; }
    //protected getService() { return SupplierService.baseUrl; }

    protected form = new SupplierForm(this.idPrefix);
   
}
