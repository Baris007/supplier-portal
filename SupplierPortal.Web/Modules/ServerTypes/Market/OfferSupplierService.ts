import { ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { DeleteRequest } from "../Services/DeleteRequest";
import { DeleteResponse } from "../Services/DeleteResponse";
import { ListRequest } from "../Services/ListRequest";
import { ListResponse } from "../Services/ListResponse";
import { RetrieveRequest } from "../Services/RetrieveRequest";
import { RetrieveResponse } from "../Services/RetrieveResponse";
import { SaveRequest } from "../Services/SaveRequest";
import { SaveResponse } from "../Services/SaveResponse";
import { OfferSupplierRow } from "./OfferSupplierRow";

export namespace OfferSupplierService {
    export const baseUrl = 'Market/OfferSupplier';

    export declare function Create(request: SaveRequest<OfferSupplierRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<OfferSupplierRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<OfferSupplierRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<OfferSupplierRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<OfferSupplierRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<OfferSupplierRow>>;

    export const Methods = {
        Create: "Market/OfferSupplier/Create",
        Update: "Market/OfferSupplier/Update",
        Delete: "Market/OfferSupplier/Delete",
        Retrieve: "Market/OfferSupplier/Retrieve",
        List: "Market/OfferSupplier/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>OfferSupplierService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}