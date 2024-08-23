using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web; 
using System;
using System.Data;
using System.Globalization;
using System.Net.Mail;
using System.Net;
using MyRow = SupplierPortal.Market.OfferRow;
using Microsoft.Extensions.Configuration;
using System.Linq;

namespace SupplierPortal.Market.Endpoints;

[Route("Services/Market/Offer/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class OfferEndpoint : ServiceEndpoint
{
    public static IConfiguration _configuration;

    public OfferEndpoint(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpPost, AuthorizeCreate(typeof(MyRow))]
    public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] IOfferSaveHandler handler)
    {
        return handler.Create(uow, request);
    }

    [HttpPost, AuthorizeUpdate(typeof(MyRow))]
    public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] IOfferSaveHandler handler)
    {
        return handler.Update(uow, request);
    }

    [HttpPost, AuthorizeDelete(typeof(MyRow))]
    public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
        [FromServices] IOfferDeleteHandler handler)
    {
        return handler.Delete(uow, request);
    }

    [HttpPost]
    public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
        [FromServices] IOfferRetrieveHandler handler)
    {
        return handler.Retrieve(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
        [FromServices] IOfferListHandler handler)
    {
        return handler.List(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public FileContentResult ListExcel(IDbConnection connection, ListRequest request,
        [FromServices] IOfferListHandler handler,
        [FromServices] IExcelExporter exporter)
    {
        var data = List(connection, request, handler).Entities;
        var bytes = exporter.Export(data, typeof(Columns.OfferColumns), request.ExportColumns);
        return ExcelContentResult.Create(bytes, "OfferList_" +
            DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
    }

    [HttpPost]
    public ServiceResponse SendMail(IUnitOfWork uow, RetrieveRequest request)
    {
        var offer = uow.Connection.TryById<MyRow>(request.EntityId);
        var setting = new MailSettings()
        {
            FromAddress = "b.deniz20031@gmail.com",
            FromName = "Baris",
            SmtpHost = "smtp.gmail.com",
            SmtpPort = 587,
            EnableSsl = true,
            Password = "bmxrfbfbmetfrvyk",
            To = new List<string> { "b.deniz20031@gmail.com","aliasfur08@gmail.com","zekiipekli5934@gmail.com" },
            Subject = "ProjeHakkında",
            Body = "MailKomutlarıYazıldı"
        };
        SendMail1(setting);
        return new ServiceResponse();


    }
    public IActionResult SendMail1(MailSettings setting)
    {
        try
        {
            //var setting = _configuration.GetSection("MailSettings").Get<MailSettings>();

            var fromAddress = new MailAddress(setting.FromAddress, setting.FromName);
            //foreach (var mail in setting.To)
            //{
            //    var toAddress = new MailAddress(mail, "Receiver Name");
            //}

            var smtp = new SmtpClient
            {
                Host = setting.SmtpHost,
                Port = setting.SmtpPort,
                EnableSsl = setting.EnableSsl,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(setting.FromAddress, setting.Password),
               
            };

            using (var message = new MailMessage(setting.FromAddress, string.Join(',', setting.To))
            {

                Subject = setting.Subject,
                Body = setting.Body,
                IsBodyHtml = true // HTML içeriğe izin vermek için,
            })
            {
                smtp.Send(message);
            }

            return Ok("Mail sent successfully!");
        }
        catch (SmtpException ex)
        {
            // SMTP hatalarını daha ayrıntılı şekilde ele almak için
            return BadRequest($"SMTP Error: {ex.StatusCode} - {ex.Message}");
        }
        catch (Exception ex)
        {
            return BadRequest("Error sending mail: " + ex.Message);
        }
    }

    public class MailSettings
    {
        public string FromAddress { get; set; }
        public string FromName { get; set; }
        public string SmtpHost { get; set; }
        public int SmtpPort { get; set; }
        public bool EnableSsl { get; set; }
        public string Password { get; set; }
        public List<string> To { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
    }

}