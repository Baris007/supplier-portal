import { OfferDetailEditor } from "@/Market/OfferDetail/OfferDetailEditor";
import { LookupEditor, DateEditor, EnumEditor, DecimalEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { CurrencyType } from "../Modules/Market.Request.Enum.CurrencyType";
import { State } from "../Modules/Market.Request.Enum.State";
import { Currency } from "./Curency.Currency";

export interface RequestForm {
    CompanyName: LookupEditor;
    OfferDate: DateEditor;
    ValueDate: DateEditor;
    State: EnumEditor;
    Currency: EnumEditor;
    CurrencyType: EnumEditor;
    Exchangerate: DecimalEditor;
    DeliveryTime: DateEditor;
    Representatives: StringEditor;
    ToWho: StringEditor;
    EMail: StringEditor;
    CallNumber: StringEditor;
    OfferId: OfferDetailEditor;
    SubTotal: DecimalEditor;
    LineDiscount: DecimalEditor;
    DiscountRate: DecimalEditor;
    DiscountTotal: DecimalEditor;
    GrossTotal: DecimalEditor;
    Vat: DecimalEditor;
    Total: DecimalEditor;
}

export class RequestForm extends PrefixedContext {
    static readonly formKey = 'Market.Request';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!RequestForm.init)  {
            RequestForm.init = true;

            var w0 = LookupEditor;
            var w1 = DateEditor;
            var w2 = EnumEditor;
            var w3 = DecimalEditor;
            var w4 = StringEditor;
            var w5 = OfferDetailEditor;

            initFormType(RequestForm, [
                'CompanyName', w0,
                'OfferDate', w1,
                'ValueDate', w1,
                'State', w2,
                'Currency', w2,
                'CurrencyType', w2,
                'Exchangerate', w3,
                'DeliveryTime', w1,
                'Representatives', w4,
                'ToWho', w4,
                'EMail', w4,
                'CallNumber', w4,
                'OfferId', w5,
                'SubTotal', w3,
                'LineDiscount', w3,
                'DiscountRate', w3,
                'DiscountTotal', w3,
                'GrossTotal', w3,
                'Vat', w3,
                'Total', w3
            ]);
        }
    }
}

[State, Currency, CurrencyType]; // referenced types