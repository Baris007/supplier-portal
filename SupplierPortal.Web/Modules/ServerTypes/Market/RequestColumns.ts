import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CurrencyType } from "../Modules/Market.Request.Enum.CurrencyType";
import { RequestRow } from "./RequestRow";

export interface RequestColumns {
    Id: Column<RequestRow>;
    CompanyName: Column<RequestRow>;
    OfferId: Column<RequestRow>;
    OfferDate: Column<RequestRow>;
    ValueDate: Column<RequestRow>;
    RequestState: Column<RequestRow>;
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

[CurrencyType]; // referenced types