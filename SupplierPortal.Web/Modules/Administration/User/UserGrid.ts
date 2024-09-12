import { RoleRow, UserColumns, UserRow, UserService } from "@/ServerTypes/Administration";
import { Decorators, EntityGrid, ToolButton, serviceCall } from "@serenity-is/corelib";
import { Lookup, resolveUrl, tryFirst } from "@serenity-is/corelib";
import { UserDialog } from "./UserDialog";

@Decorators.registerClass()
export class UserGrid extends EntityGrid<UserRow, any> {
    protected getColumnsKey() { return UserColumns.columnsKey; }
    protected getDialogType() { return UserDialog; }
    protected getIdProperty() { return UserRow.idProperty; }
    protected getIsActiveProperty() { return UserRow.isActiveProperty; }
    protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
    protected getService() { return UserService.baseUrl; }

    constructor(props: any) {
        super(props);
    }

    protected override getDefaultSortBy() {
        return [UserRow.Fields.Username];
    }

    protected override createIncludeDeletedButton() {
    }

    protected override getColumns() {
        var columns = super.getColumns();

        var roles = tryFirst(columns, x => x.field == UserRow.Fields.Roles);
        if (roles) {
            var rolesLookup: Lookup<RoleRow>;
            RoleRow.getLookupAsync().then(lookup => {
                rolesLookup = lookup;
                this.slickGrid.invalidate();
            });

            roles.format = ctx => {
                if (!rolesLookup)
                    return `<i class="fa fa-spinner"></i>`;

                var roleList = (ctx.value || []).map(x => (rolesLookup.itemById[x] || {}).RoleName || "");
                roleList.sort();
                return roleList.join(", ");
            };
        }

        // Add a column with checkboxes to select users
        columns.unshift({
            id: "Select",
            name: "Reset Mail",
            field: "",
            sortable: false,
            width: 70,
            formatter: (row, cell, value, columnDef, dataContext) => {
                return `<input type="checkbox" class="user-checkbox" data-id="${dataContext.UserId}" />`;
            }
        });

        return columns;
    }

    // Add the button to send password reset emails
    protected getButtons(): ToolButton[] {
        let buttons = super.getButtons();

        // Add the "Send Reset Email" button
        buttons.push({
            title: "Send Reset Email",
            cssClass: "send-reset-email-button",
            icon: 'fa fa-envelope',
            onClick: () => this.onResetPasswordClick() // Handle the button click
        });

        return buttons;
    }

    // Function to handle sending reset emails for selected users
    protected onResetPasswordClick() {
        // Get selected rows (checkboxes that are checked)
        const checkboxes = document.querySelectorAll('.user-checkbox:checked');
        const selectedUsers = Array.from(checkboxes).map((checkbox: any) => {
            const userId = checkbox.getAttribute('data-id');
            return this.view.getItemById(userId);
        });

        if (selectedUsers.length === 0) {
            this.showWarning("Please select at least one user to send password reset.");
            return;
        }

        // Loop through selected users and send a reset email
        selectedUsers.forEach(user => {
            let email = user.Email;  // Access the Email field directly from the UserRow

            if (email) {
                let requestData = {
                    Email: email
                };

                serviceCall({
                    url: resolveUrl('~/Account/ForgotPassword'),  // Send the request to the ForgotPassword service
                    request: requestData,
                    onSuccess: response => {
                        console.log("Password reset email sent successfully to " + email);
                    },
                    onError: response => {
                        console.error("Error sending reset email to " + email + ": ", response);
                    }
                });
            } else {
                console.error("User does not have an email address: " + user.Username);
            }
        });
    }

    // Helper function to show warning (no need for `Q`)
    private showWarning(message: string) {
        alert(message);  // Use the browser's alert, or implement a custom UI notification
    }
}
