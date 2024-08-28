import { EmailForm, EmailRow, EmailService } from '@/ServerTypes/ScheduledEmail';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('SupplierPortal.ScheduledEmail.EmailDialog')
export class EmailDialog extends EntityDialog<EmailRow, any> {
    protected getFormKey() { return EmailForm.formKey; }
    protected getRowDefinition() { return EmailRow; }
    protected getService() { return EmailService.baseUrl; }

    protected form = new EmailForm(this.idPrefix);
}