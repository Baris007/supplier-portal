//namespace CSupplierPortalRM.Web.Modules.Common.Api
//{ 
//    using Microsoft.AspNetCore.Mvc.ApplicationModels;

//    public class ControllerHidingConvention : IControllerModelConvention
//    {
//        public void Apply(ControllerModel controller)
//        {
//            // any other logic, can be used here
//            if (controller.ControllerType.Namespace.StartsWith("SupplierPortal.Web.Modules.Common.Api"))
//            {
//                return;
//            }

//            foreach (ActionModel action in controller.Actions)
//            {
//                action.ApiExplorer.IsVisible = false;
//            }
//        }
//    }
//}
