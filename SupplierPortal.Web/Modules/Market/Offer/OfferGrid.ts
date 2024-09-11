import { OfferColumns, OfferDetailRow, OfferRow, OfferService, OfferSupplierRow } from '@/ServerTypes/Market';
import { Decorators, EntityGrid, text, ToolButton, tryGetText } from '@serenity-is/corelib';
import { OfferDialog } from './OfferDialog';
import { EmailService } from '../../ServerTypes/ScheduledEmail';

@Decorators.registerClass('SupplierPortal.Market.OfferGrid')
export class OfferGrid extends EntityGrid<OfferRow, any> {
    protected getColumnsKey() { return OfferColumns.columnsKey; }
    protected getDialogType() { return OfferDialog; }
    protected getRowDefinition() { return OfferRow; }
    protected getService() { return OfferService.baseUrl; }

    //protected getButtons(): ToolButton[] {
    //    let buttons = super.getButtons();

    //    //To remove Add button
    //    //buttons = buttons.filter(f => f.cssClass != 'add-button');

    //    //To create a new button
    //    buttons.push({
    //        title: 'Fenerbahce',
    //        icon: 'fa fa-bell',

    //        onClick: e => {
    //        }
    //    });

    //    return buttons
    //}
    constructor(props: any) {
        super(props);
    }
    protected getColumns() {
        var columns = super.getColumns();
        columns.splice(1, 0, {
            field: text("Db.Default.Movie", 'Send Mail'),
            name: '',
            format: ctx => `<a class="inline-action mail-save">` +
                '<i class="fa fa-bell"></i></a>',
            width: 24,
            minWidth: 24,
            maxWidth: 24
        });
        columns.splice(2, 0, {
            field: 'Print Invoice Pdf',
            name: '',
            format: ctx => '<a class="inline-action print-invoice" title=' + '"' + tryGetText("Db.SalesMarketing.Offer.CreatePdf") + '"> ' +
                '<i class="fa fa-check" style="color: #af0d0d;"></i></a>',
            width: 28,
            minWidth: 28,
            maxWidth: 28
        });
        return columns;
    }
    protected onClick(e: Event, row: number, cell: number) {
        super.onClick(e, row, cell);

        var item = this.itemAt(row) as OfferRow;
        var target = e.target as HTMLElement;

        // Parent elemente erişim
        if (target.parentElement && target.parentElement.classList.contains('inline-action'))
            target = target.parentElement;

        if (target.classList.contains('inline-action')) {
            e.preventDefault();
            if (target.classList.contains('print-invoice')) {
                // ReportHelper.executeBoldReport({
                //    reportName: "teklif",
                //    fileName: "teklif",
                //    extension: 'PDF',
                //    paramNameValues: { Id: item.Id.toString() }
                // });
            }
            if (target.classList.contains('mail-save')) {
                debugger;
                var detailList = OfferSupplierRow.getLookup().items.filter(q => q.OfferId == item.Id)
                for (var detail of detailList) {
                    EmailService.Create({
                        Entity: {
                            OfferSupplierId: detail.Id,
                            IsAutoSended: true,
                            IsSended: false,
                            OfferId: item.Id
                    } })
                }
                
            }
        }
    }
}