import { Decorators } from "@serenity-is/corelib";

export enum Unit {
    Metre = 1,
    Inc = 2,
    Kilogram = 3,
    Gram = 4,
    Litre = 5,
    Adet = 6
}
Decorators.registerEnumType(Unit, 'SupplierPortal.Inventory.Enum.Unit');