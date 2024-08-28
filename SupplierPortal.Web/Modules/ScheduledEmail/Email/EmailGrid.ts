import { EmailColumns, EmailRow, EmailService } from '@/ServerTypes/ScheduledEmail';
import { Decorators, EntityGrid, ToolButton } from '@serenity-is/corelib';
import { EmailDialog } from './EmailDialog';
import { OfferRow, OfferService } from '../../ServerTypes/Market';

@Decorators.registerClass('SupplierPortal.ScheduledEmail.EmailGrid')
export class EmailGrid extends EntityGrid<EmailRow> {
    protected getColumnsKey() { return EmailColumns.columnsKey; }
    protected getDialogType() { return EmailDialog; }
    protected getRowDefinition() { return EmailRow; }
    protected getService() { return EmailService.baseUrl; }


    protected getButtons(): ToolButton[] {
        let buttons = super.getButtons();

        //To remove Add button
        //buttons = buttons.filter(f => f.cssClass != 'add-button');

        //To create a new button
        buttons.push({
            title: 'Mail Sender',
            icon: 'fa fa-bell',

            onClick: e => {

                debugger
                var items = this.view.getItems();
                var detailList = items.filter(q => q.IsSended == false && q.IsAutoSended == true);
                OfferService.SendMail({
                    EmailList: detailList
                });
            }
        });

        return buttons
    }
}