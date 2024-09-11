using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using SupplierPortal.Web.Modules.Common.Api;
using System;
using System.Data;
using System.Globalization;
using static Org.BouncyCastle.Math.EC.ECCurve;
using MyRow = SupplierPortal.Market.RequestRow;

namespace SupplierPortal.Market.Endpoints;

[Route("Services/Market/Request/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class RequestEndpoint : ServiceEndpoint
{
    [HttpPost, AuthorizeCreate(typeof(MyRow))]
    public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] IRequestSaveHandler handler)
    {
        return handler.Create(uow, request);
    }

    [HttpPost, AuthorizeUpdate(typeof(MyRow))]
    public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] IRequestSaveHandler handler)
    {
        return handler.Update(uow, request);
    }

    [HttpPost, AuthorizeDelete(typeof(MyRow))]
    public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
        [FromServices] IRequestDeleteHandler handler)
    {
        return handler.Delete(uow, request);
    }

    [HttpPost]
    public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
        [FromServices] IRequestRetrieveHandler handler)
    {
        return handler.Retrieve(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
        [FromServices] IRequestListHandler handler)
    {
        return handler.List(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public FileContentResult ListExcel(IDbConnection connection, ListRequest request,
        [FromServices] IRequestListHandler handler,
        [FromServices] IExcelExporter exporter)
    {
        var data = List(connection, request, handler).Entities;
        var bytes = exporter.Export(data, typeof(Columns.RequestColumns), request.ExportColumns);
        return ExcelContentResult.Create(bytes, "RequestList_" +
            DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
    }
    public GetRequestDetailListResponse GetRequestDetailList( IUnitOfWork uow, ServiceRequest request)
    {
        var offerId = HttpContext.Session.GetString("OfferId");
        List<OfferDetailRow> _list = uow.Connection.List<OfferDetailRow>(q => q
        .SelectTableFields()
        .SelectNonTableFields()
        .Where(OfferDetailRow.Fields.OfferId == offerId));
        List<RequestDetailRow> requestDetailRow = _list
            .Select(o => new RequestDetailRow
            {
                ItemId = o.ItemId,
                Quantity = o.Quantity,
                //Currency = o.Curency,
            })
            .ToList();
        var resp = new GetRequestDetailListResponse()
        {
            RequestDetailList = requestDetailRow
        };
        return resp;
    }

    public GetContextInfoResponse GetContextInfo(IDbConnection connection, ServiceRequest request)
    {
        var userEmail = HttpContext.Session.GetString("UserEmail");
        var resp = new GetContextInfoResponse()
        {
            UserEmail = userEmail
        };
        return resp;
    }
    public class GetContextInfoResponse : ServiceResponse
    {
        public string UserEmail { get; set; }
    }
    public class GetRequestDetailListResponse : ServiceResponse
    {
        //public string OfferId { get; set; }
        public List<RequestDetailRow> RequestDetailList { get; set; }

    }
}