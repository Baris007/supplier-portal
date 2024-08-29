import { Decorators } from "@serenity-is/corelib";

export enum KDV {
    Teknolojik = 1,
    Gıda = 2
}
Decorators.registerEnumType(KDV, 'SupplierPortal.Inventory.Enum.KDV');