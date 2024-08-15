import { GridEditorBase } from "@serenity-is/extensions";

@Decorators.registerEditor('MRPPlus.Inventory.BillOfMaterialDetailEditor')
@Decorators.maximizable()
@Decorators.filterable()
export class OfferDetailGridEditor extends GridEditorBase<OfferDetailRow, any> {
    //protected getColumnsKey() { return 'Inventory.BillOfMaterialDetail'; }
    //protected getDialogType() { return BillOfMaterialDetailEditorDialog; }
    //protected getLocalTextPrefix() { return BillOfMaterialDetailRow.localTextPrefix; }
    //protected getRowDefinition() { return BillOfMaterialDetailRow; }
    //protected getNameProperty() { return BillOfMaterialDetailRow.nameProperty; }
    //protected getService() { return BillOfMaterialDetailService.baseUrl; }
    protected getColumnsKey() { return BillOfMaterialDetailColumns.columnsKey; }
    protected getDialogType() { return BillOfMaterialDetailEditorDialog; }
    protected getRowDefinition() { return BillOfMaterialDetailRow; }
    protected getService() { return BillOfMaterialDetailService.baseUrl; }
    constructor(props: EditorProps<any>) {
        super(props);

        this.element.addClass("editor-height-five-hundred-px");
    }

}
