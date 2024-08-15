﻿import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { ItemsRow } from "./ItemsRow";

export namespace ItemsService {
    export const baseUrl = 'Portal/Items';

    export declare function Create(request: SaveRequest<ItemsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<ItemsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ItemsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<ItemsRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<ItemsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<ItemsRow>>;

    export const Methods = {
        Create: "Portal/Items/Create",
        Update: "Portal/Items/Update",
        Delete: "Portal/Items/Delete",
        Retrieve: "Portal/Items/Retrieve",
        List: "Portal/Items/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>ItemsService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}