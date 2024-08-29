import { ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { DeleteRequest } from "../Services/DeleteRequest";
import { DeleteResponse } from "../Services/DeleteResponse";
import { ListRequest } from "../Services/ListRequest";
import { ListResponse } from "../Services/ListResponse";
import { RetrieveRequest } from "../Services/RetrieveRequest";
import { RetrieveResponse } from "../Services/RetrieveResponse";
import { SaveRequest } from "../Services/SaveRequest";
import { SaveResponse } from "../Services/SaveResponse";
import { OfferDetailRow } from "./OfferDetailRow";

export namespace OfferDetailService {
    export const baseUrl = 'Market/OfferDetail';

    export declare function Create(request: SaveRequest<OfferDetailRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<OfferDetailRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<OfferDetailRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<OfferDetailRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<OfferDetailRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<OfferDetailRow>>;

    export const Methods = {
        Create: "Market/OfferDetail/Create",
        Update: "Market/OfferDetail/Update",
        Delete: "Market/OfferDetail/Delete",
        Retrieve: "Market/OfferDetail/Retrieve",
        List: "Market/OfferDetail/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>OfferDetailService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}