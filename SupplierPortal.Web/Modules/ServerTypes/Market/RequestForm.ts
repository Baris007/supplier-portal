import { OfferDetailEditor } from "@/Market/OfferDetail/OfferDetailEditor";
import { LookupEditor, DateEditor, StringEditor, EnumEditor, DecimalEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { CurrencyType } from "../Modules/Market.Request.Enum.CurrencyType";

export interface RequestForm {
    CompanyName: LookupEditor;
    OfferDate: DateEditor;
    ValueDate: DateEditor;
    RequestState: StringEditor;
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
            var w2 = StringEditor;
            var w3 = EnumEditor;
            var w4 = DecimalEditor;
            var w5 = OfferDetailEditor;

            initFormType(RequestForm, [
                'CompanyName', w0,
                'OfferDate', w1,
                'ValueDate', w1,
                'RequestState', w2,
                'CurrencyType', w3,
                'Exchangerate', w4,
                'DeliveryTime', w1,
                'Representatives', w2,
                'ToWho', w2,
                'EMail', w2,
                'CallNumber', w2,
                'OfferId', w5,
                'SubTotal', w4,
                'LineDiscount', w4,
                'DiscountRate', w4,
                'DiscountTotal', w4,
                'GrossTotal', w4,
                'Vat', w4,
                'Total', w4
            ]);
        }
    }
}

[CurrencyType]; // referenced types