import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { OffersRow } from "./OffersRow";

export namespace OffersService {
    export const baseUrl = 'Item/Offers';

    export declare function Create(request: SaveRequest<OffersRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<OffersRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<OffersRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<OffersRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<OffersRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<OffersRow>>;

    export const Methods = {
        Create: "Item/Offers/Create",
        Update: "Item/Offers/Update",
        Delete: "Item/Offers/Delete",
        Retrieve: "Item/Offers/Retrieve",
        List: "Item/Offers/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>OffersService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}