import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { ItemRow } from "./ItemRow";

export namespace ItemService {
    export const baseUrl = 'Items/Item';

    export declare function Create(request: SaveRequest<ItemRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<ItemRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ItemRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<ItemRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<ItemRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<ItemRow>>;

    export const Methods = {
        Create: "Items/Item/Create",
        Update: "Items/Item/Update",
        Delete: "Items/Item/Delete",
        Retrieve: "Items/Item/Retrieve",
        List: "Items/Item/List"
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