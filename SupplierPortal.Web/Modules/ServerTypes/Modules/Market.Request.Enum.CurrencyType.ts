import { Decorators } from "@serenity-is/corelib";

export enum CurrencyType {
    Beklemde = 1,
    Onaylandi = 2
}
Decorators.registerEnumType(CurrencyType, 'SupplierPortal.Modules.Market.Request.Enum.CurrencyType');