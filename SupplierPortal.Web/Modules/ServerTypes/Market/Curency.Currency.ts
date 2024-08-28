import { Decorators } from "@serenity-is/corelib";

export enum Currency {
    TL = 1,
    Dolar = 2,
    Euro = 3
}
Decorators.registerEnumType(Currency, 'SupplierPortal.Market.Curency.Currency');