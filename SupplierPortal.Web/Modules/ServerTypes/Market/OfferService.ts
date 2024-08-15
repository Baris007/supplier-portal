import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { OfferRow } from "./OfferRow";

export namespace OfferService {
    export const baseUrl = 'Market/Offer';

    export declare function Create(request: SaveRequest<OfferRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<OfferRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<OfferRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<OfferRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<OfferRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<OfferRow>>;

    export const Methods = {
        Create: "Market/Offer/Create",
        Update: "Market/Offer/Update",
        Delete: "Market/Offer/Delete",
        Retrieve: "Market/Offer/Retrieve",
        List: "Market/Offer/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>OfferService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}