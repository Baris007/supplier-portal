import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { State } from "../Modules/Market.Request.Enum.State";
import { RequestRow } from "./RequestRow";

export interface RequestColumns {
    Id: Column<RequestRow>;
    CompanyName: Column<RequestRow>;
    OfferId: Column<RequestRow>;
    OfferDate: Column<RequestRow>;
    ValueDate: Column<RequestRow>;
    State: Column<RequestRow>;
    Currency: Column<RequestRow>;
    CurrencyType: Column<RequestRow>;
    Exchangerate: Column<RequestRow>;
    DeliveryTime: Column<RequestRow>;
    Representatives: Column<RequestRow>;
    ToWho: Column<RequestRow>;
    EMail: Column<RequestRow>;
    CallNumber: Column<RequestRow>;
}

export class RequestColumns extends ColumnsBase<RequestRow> {
    static readonly columnsKey = 'Market.Request';
    static readonly Fields = fieldsProxy<RequestColumns>();
}

[State]; // referenced types