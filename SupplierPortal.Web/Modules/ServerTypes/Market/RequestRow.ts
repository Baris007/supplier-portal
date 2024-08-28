import { fieldsProxy } from "@serenity-is/corelib";
import { CurrencyType } from "../Modules/Market.Request.Enum.CurrencyType";
import { State } from "../Modules/Market.Request.Enum.State";
import { Currency } from "./Curency.Currency";
import { OfferDetailRow } from "./OfferDetailRow";

export interface RequestRow {
    Id?: number;
    CompanyName?: number;
    OfferDate?: string;
    ValueDate?: string;
    State?: State;
    Currency?: Currency;
    CurrencyType?: CurrencyType;
    Exchangerate?: number;
    DeliveryTime?: string;
    Representatives?: string;
    ToWho?: string;
    EMail?: string;
    CallNumber?: string;
    OfferId?: OfferDetailRow[];
    SubTotal?: number;
    LineDiscount?: number;
    DiscountRate?: number;
    DiscountTotal?: number;
    GrossTotal?: number;
    Vat?: number;
    Total?: number;
}

export abstract class RequestRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Representatives';
    static readonly localTextPrefix = 'Market.Request';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<RequestRow>();
}