import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, ServiceRequest, serviceRequest } from "@serenity-is/corelib";
import { GetContextInfoResponse } from "./GetContextInfoResponse";
import { RequestRow } from "./RequestRow";

export namespace RequestService {
    export const baseUrl = 'Market/Request';

    export declare function Create(request: SaveRequest<RequestRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<RequestRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<RequestRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<RequestRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<RequestRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<RequestRow>>;
    export declare function GetContextInfo(request: ServiceRequest, onSuccess?: (response: GetContextInfoResponse) => void, opt?: ServiceOptions<any>): PromiseLike<GetContextInfoResponse>;

    export const Methods = {
        Create: "Market/Request/Create",
        Update: "Market/Request/Update",
        Delete: "Market/Request/Delete",
        Retrieve: "Market/Request/Retrieve",
        List: "Market/Request/List",
        GetContextInfo: "Market/Request/GetContextInfo"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List', 
        'GetContextInfo'
    ].forEach(x => {
        (<any>RequestService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}