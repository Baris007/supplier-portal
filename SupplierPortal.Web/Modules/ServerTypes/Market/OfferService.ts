import { ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { DeleteRequest } from "../Services/DeleteRequest";
import { DeleteResponse } from "../Services/DeleteResponse";
import { ListRequest } from "../Services/ListRequest";
import { ListResponse } from "../Services/ListResponse";
import { RetrieveRequest } from "../Services/RetrieveRequest";
import { RetrieveResponse } from "../Services/RetrieveResponse";
import { SaveRequest } from "../Services/SaveRequest";
import { SaveResponse } from "../Services/SaveResponse";
import { ServiceResponse } from "../Services/ServiceResponse";
import { OfferRow } from "./OfferRow";
import { SendmailRequest } from "./SendmailRequest";

export namespace OfferService {
    export const baseUrl = 'Market/Offer';

    export declare function Create(request: SaveRequest<OfferRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<OfferRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<OfferRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<OfferRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<OfferRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<OfferRow>>;
    export declare function SendMail(request: SendmailRequest, onSuccess?: (response: ServiceResponse) => void, opt?: ServiceOptions<any>): PromiseLike<ServiceResponse>;

    export const Methods = {
        Create: "Market/Offer/Create",
        Update: "Market/Offer/Update",
        Delete: "Market/Offer/Delete",
        Retrieve: "Market/Offer/Retrieve",
        List: "Market/Offer/List",
        SendMail: "Market/Offer/SendMail"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List', 
        'SendMail'
    ].forEach(x => {
        (<any>OfferService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}