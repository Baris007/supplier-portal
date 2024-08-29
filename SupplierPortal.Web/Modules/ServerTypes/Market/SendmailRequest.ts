import { EmailRow } from "../ScheduledEmail/EmailRow";
import { RetrieveRequest } from "../Services/RetrieveRequest";

export interface SendmailRequest extends RetrieveRequest {
    EmailList?: EmailRow[];
}