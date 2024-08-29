import { fieldsProxy } from "@serenity-is/corelib";
import { CurrencyType } from "../Modules/Market.Request.Enum.CurrencyType";
import { OfferDetailRow } from "./OfferDetailRow";

export interface RequestRow {
    Id?: number;
    CompanyName?: number;
    OfferDate?: string;
    ValueDate?: string;
    RequestState?: string;
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
    static readonly deletePermission = 'Marketing:Request';
    static readonly insertPermission = 'Marketing:Request';
    static readonly readPermission = 'Marketing:Request';
    static readonly updatePermission = 'Marketing:Request';

    static readonly Fields = fieldsProxy<RequestRow>();
}