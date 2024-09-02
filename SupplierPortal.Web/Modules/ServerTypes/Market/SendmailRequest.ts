import { RetrieveRequest } from "@serenity-is/corelib";
import { EmailRow } from "../ScheduledEmail/EmailRow";

export interface SendmailRequest extends RetrieveRequest {
    EmailList?: EmailRow[];
}