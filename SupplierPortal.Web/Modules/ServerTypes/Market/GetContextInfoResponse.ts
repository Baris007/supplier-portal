import { ServiceResponse } from "../Services/ServiceResponse";

export interface GetContextInfoResponse extends ServiceResponse {
    UserEmail?: string;
}