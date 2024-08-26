import { ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { DeleteRequest } from "../Services/DeleteRequest";
import { DeleteResponse } from "../Services/DeleteResponse";
import { ListRequest } from "../Services/ListRequest";
import { ListResponse } from "../Services/ListResponse";
import { RetrieveRequest } from "../Services/RetrieveRequest";
import { RetrieveResponse } from "../Services/RetrieveResponse";
import { SaveRequest } from "../Services/SaveRequest";
import { SaveResponse } from "../Services/SaveResponse";
import { ItemRow } from "./ItemRow";

export namespace ItemService {
    export const baseUrl = 'Inventory/Item';

    export declare function Create(request: SaveRequest<ItemRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<ItemRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ItemRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<ItemRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<ItemRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<ItemRow>>;

    export const Methods = {
        Create: "Inventory/Item/Create",
        Update: "Inventory/Item/Update",
        Delete: "Inventory/Item/Delete",
        Retrieve: "Inventory/Item/Retrieve",
        List: "Inventory/Item/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>ItemService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}