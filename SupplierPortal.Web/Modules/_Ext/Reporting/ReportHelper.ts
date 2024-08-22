import { ToolButton, coalesce, postToUrl } from "@serenity-is/corelib";
/*import { coalesce, postToUrl } from "@serenity-is/corelib/q";*/

export interface ReportExecuteOptions {
    reportKey: string;
    download?: boolean;
    extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
    getParams?: () => any;
    params?: { [key: string]: any }
    target?: string;
}

export interface FastReportExecuteOptions {
    download?: boolean;
    extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
    getParams?: () => any;
    params?: { [key: string]: any }
    target?: string;
}
export interface BoldReportExecuteOptions {
    download?: boolean;
    extension?: 'PDF' | 'DOCX' | 'CSV' | 'XLSX';
    getParams?: () => any;
    params?: { [key: string]: any }
    target?: string;
    reportName?: string;
    fileName?: string;
    paramNameValues?: { [key: string]: string };
}

export interface ReportButtonOptions extends ReportExecuteOptions {
    title?: string;
    cssClass?: string;
    icon?: string;
}

export namespace ReportHelper {

    export function createToolButton(options: ReportButtonOptions): ToolButton {
        return {
            title: coalesce(options.title, 'Report'),
            cssClass: coalesce(options.cssClass, 'print-button'),
            icon: options.icon,
            onClick: () => {
                ReportHelper.execute(options);
            }
        };
    }

    export function execute(options: ReportExecuteOptions) {
        var opt = options.getParams ? options.getParams() : options.params;

        postToUrl({
            url: '~/DSReport/' + (options.download ? 'Download' : 'Render'),
            params: {
                key: options.reportKey,
                ext: coalesce(options.extension, 'pdf'),
                opt: opt ? JSON.stringify(opt) : ''
            },
            target: coalesce(options.target, '_blank')
        });
    }
    export function executeFastReport(options: FastReportExecuteOptions) {
        var opt = options.getParams ? options.getParams() : options.params;

        postToUrl({
            url: '~/DSReport/' + 'RenderFastReport',
            params: {
                ext: coalesce(options.extension, 'pdf'),
                opt: opt ? JSON.stringify(opt) : ''
            },
            target: coalesce(options.target, '_blank')
        });
    }


    export function executeBoldReport(options: BoldReportExecuteOptions) {
        var opt = options;

        postToUrl({
            url: '~/DSReport/' + 'DSExport',
            params: {
                reportName: opt.reportName,
                writerFormat: coalesce(opt.extension, 'PDF'),
                paramNameValues: JSON.stringify(opt.paramNameValues)
            },
            target: coalesce(options.target, '_blank')
        });
    }
}
