import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { RequestRow } from "./RequestRow";

export namespace RequestService {
    export const baseUrl = 'Market/Request';

    export declare function Create(request: SaveRequest<RequestRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<RequestRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<RequestRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<RequestRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<RequestRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<RequestRow>>;

    export const Methods = {
        Create: "Market/Request/Create",
        Update: "Market/Request/Update",
        Delete: "Market/Request/Delete",
        Retrieve: "Market/Request/Retrieve",
        List: "Market/Request/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>RequestService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}