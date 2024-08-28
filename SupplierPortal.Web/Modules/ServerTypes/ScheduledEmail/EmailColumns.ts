import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { EmailRow } from "./EmailRow";

export interface EmailColumns {
    Id: Column<EmailRow>;
    OfferSupplierId: Column<EmailRow>;
    OfferId: Column<EmailRow>;
    IsSended: Column<EmailRow>;
    IsAutoSended: Column<EmailRow>;
}

export class EmailColumns extends ColumnsBase<EmailRow> {
    static readonly columnsKey = 'ScheduledEmail.Email';
    static readonly Fields = fieldsProxy<EmailColumns>();
}