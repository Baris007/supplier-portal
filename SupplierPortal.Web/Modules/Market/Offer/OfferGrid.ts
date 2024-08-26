import { OfferColumns, OfferRow, OfferService } from '@/ServerTypes/Market';
import { Decorators, EntityGrid, text, tryGetText } from '@serenity-is/corelib';
import { OfferDialog } from './OfferDialog';

@Decorators.registerClass('SupplierPortal.Market.OfferGrid')
export class OfferGrid extends EntityGrid<OfferRow> {
    protected getColumnsKey() { return OfferColumns.columnsKey; }
    protected getDialogType() { return OfferDialog; }
    protected getRowDefinition() { return OfferRow; }
    protected getService() { return OfferService.baseUrl; }
    protected getAddButtonCaption() {
        return "Add New Offer";
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
    //protected onClick(e: JQueryEventObject, row: number, cell: number) {
    //    super.onClick(e, row, cell);

    //    if (e.isDefaultPrevented())
    //        return;

    //    var item = this.itemAt(row) as OfferRow;
    //    var target = $(e.target);

    //    if (target.parent().hasClass('inline-action'))
    //        target = target.parent();

    //    if (target.hasClass('inline-action')) {
    //        e.preventDefault();
    //        if (target.hasClass('print-invoice')) {
    //            //ReportHelper.executeBoldReport({
    //            //    reportName: "teklif",
    //            //    fileName: "teklif",
    //            //    extension: 'PDF',
    //            //    paramNameValues: { Id: item.Id.toString() }
    //            //});
    //        }

    //    }
    //}
}