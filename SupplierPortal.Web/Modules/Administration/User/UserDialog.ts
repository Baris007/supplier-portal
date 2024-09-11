import { UserForm, UserRow, UserService } from "../";
import { UserPermissionDialog } from "../UserPermission/UserPermissionDialog";
import { Decorators, EditorUtils, EntityDialog, MemberType } from "@serenity-is/corelib";
import { format, localText } from "@serenity-is/corelib";
import { Texts } from "@/ServerTypes/Texts";
import { ServiceResponse, serviceCall, resolveUrl } from "@serenity-is/corelib"

@Decorators.registerClass()
export class UserDialog extends EntityDialog<UserRow, any> {
    protected getFormKey() { return UserForm.formKey; }
    protected getIdProperty() { return UserRow.idProperty; }
    protected getIsActiveProperty() { return UserRow.isActiveProperty; }
    protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
    protected getNameProperty() { return UserRow.nameProperty; }
    protected getService() { return UserService.baseUrl; }

    protected form = new UserForm(this.idPrefix);

    constructor(props?: any) {
        super(props);

        this.form.Password.change(() => {
            EditorUtils.setRequired(this.form.PasswordConfirm, this.form.Password.value.length > 0);
        });

        this.form.Password.addValidationRule(this.uniqueName, e => {
            if (this.form.Password.value.length < 6)
                return format(localText(Texts.Validation.MinRequiredPasswordLength), 6);
        });

        this.form.PasswordConfirm.addValidationRule(this.uniqueName, e => {
            if (this.form.Password.value != this.form.PasswordConfirm.value)
                return localText(Texts.Validation.PasswordConfirmMismatch);
        });

        // Registering onSaveSuccess handler
        this.onSaveSuccess = this.onSaveSuccess.bind(this);
    }

    protected getToolbarButtons() {
        let buttons = super.getToolbarButtons();

        buttons.push({
            title: localText(Texts.Site.UserDialog.EditPermissionsButton),
            cssClass: 'edit-permissions-button',
            icon: 'fa-lock text-green',
            onClick: () => {
                new UserPermissionDialog({
                    userID: this.entity.UserId,
                    username: this.entity.Username
                }).dialogOpen();
            }
        });

        return buttons;
    }

    protected updateInterface() {
        super.updateInterface();

        this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
    }

    protected afterLoadEntity() {
        super.afterLoadEntity();

        // these fields are only required in new record mode
        this.form.Password.element.toggleClass('required', this.isNew())
            .closest('.field').findFirst('sup').toggle(this.isNew());
        this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
            .closest('.field').findFirst('sup').toggle(this.isNew());
    }

    onSaveSuccess(response) {
        // Access the Email field value from the form
        let emailValue = this.form.Email.value; // Assuming 'Email' is the name of the field

        // Construct the request data, only include necessary fields
        let requestData = {
            Email: emailValue
        };

        console.log(requestData);  // Ensure it logs the correct email

        // Check if the checkbox for sending reset email is checked
        if (this.form.SendResetEmail.value) {
            // Make a service call to send the password reset email
            serviceCall({
                url: resolveUrl('~/Account/ForgotPassword'),  // Adjusted URL if necessary
                request: requestData,  // Sending email data to the backend
                onSuccess: response => {
                    console.log("Email sent successfully");
                },
                onError: response => {
                    console.error("Error sending email: ", response);
                }
            });
        }
    }

}
