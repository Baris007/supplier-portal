import { ServiceRequest } from "@serenity-is/corelib";
import { UserPermissionRow } from "./Administration.UserPermissionRow";

export interface UserPermissionUpdateRequest extends ServiceRequest {
    UserID?: number;
    Permissions?: UserPermissionRow[];
}