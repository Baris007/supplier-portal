import { ServiceResponse } from "@serenity-is/corelib";

export interface GetContextInfoResponse extends ServiceResponse {
    UserEmail?: string;
}