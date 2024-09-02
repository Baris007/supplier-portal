import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { EmailRow } from "./EmailRow";

export namespace EmailService {
    export const baseUrl = 'ScheduledEmail/Email';

    export declare function Create(request: SaveRequest<EmailRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<EmailRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<EmailRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<EmailRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<EmailRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<EmailRow>>;

    export const Methods = {
        Create: "ScheduledEmail/Email/Create",
        Update: "ScheduledEmail/Email/Update",
        Delete: "ScheduledEmail/Email/Delete",
        Retrieve: "ScheduledEmail/Email/Retrieve",
        List: "ScheduledEmail/Email/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>EmailService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}