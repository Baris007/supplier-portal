import { Decorators } from "@serenity-is/corelib";

export enum State {
    Beklemde = 1,
    Onaylandi = 2,
    Reddedildi = 3
}
Decorators.registerEnumType(State, 'SupplierPortal.Modules.Market.Request.Enum.State');