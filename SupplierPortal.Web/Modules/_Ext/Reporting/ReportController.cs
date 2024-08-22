using BoldReports.Web;
using BoldReports.Writer;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Serenity;
using Serenity.Data;
using Serenity.Extensions;
using Serenity.PropertyGrid;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;


namespace _Ext
{
    [Route("DSReport/[action]")]
    public class ReportController : Controller
    {
        protected EnvironmentSettings EnvironmentSettings { get; }
        protected IReportRegistry ReportRegistry { get; }
        protected IRequestContext Context { get; }
        protected IWebHostEnvironment HostEnvironment { get; }
        protected ISqlConnections SqlConnections { get; set; }
        public ReportController([FromServices] IWebHostEnvironment hostEnvironment, [FromServices] ISqlConnections sqlConnections)
        {
            HostEnvironment = hostEnvironment ??
                throw new ArgumentNullException(nameof(hostEnvironment));
            SqlConnections = sqlConnections ??
                throw new ArgumentNullException(nameof(sqlConnections));
        }
        #region BOLDREPORTS 
        private static string type;
        public ActionResult DSExport(string reportName, string fileName, string writerFormat, string paramNameValues)
        {
            // Here, we have loaded the sample reports from application the wwwroot\Resources folder.
            var memoryStream = RenderBoldAsPdf(paramNameValues, reportName, writerFormat, fileName);
            FileStreamResult fileStreamResult = new FileStreamResult(memoryStream, "application/" + type);
            fileStreamResult.FileDownloadName = fileName;
            return PrepareFileResultFastReport(type, memoryStream.ToArray());
        }
        public MemoryStream RenderBoldAsPdf(string paramNameValues, string reportName, string writerFormat, string fileName)
        {
            var parameters = JsonConvert.DeserializeObject<Dictionary<string, string>>(paramNameValues);
            FileStream reportStream = new FileStream(HostEnvironment.WebRootPath + @"\reports\" + reportName + ".rdl", FileMode.Open, FileAccess.Read);
            ReportWriter writer = new ReportWriter();
            writer.ReportProcessingMode = ProcessingMode.Remote;
            DataSourceCredentials dataSourceCredentials = new DataSourceCredentials();
            string connectionString = SqlConnections.NewByKey("Default").ConnectionString;
            dataSourceCredentials.Name = "serenityEgtim";
            dataSourceCredentials.ConnectionString = connectionString;

            List<ReportParameter> userParameters = new List<ReportParameter>();

            foreach (var item in parameters)
            {
                userParameters.Add(new ReportParameter()
                {
                    Name = item.Key,
                    Values = new List<string>() { item.Value }
                });
            }
            WriterFormat format;
            type = null;

            if (writerFormat == "PDF")
            {
                type = "pdf";
                format = WriterFormat.PDF;
            }
            else if (writerFormat == "DOCX")
            {
                type = "docx";
                format = WriterFormat.Word;
            }
            else if (writerFormat == "CSV")
            {
                type = "csv";
                format = WriterFormat.CSV;
            }
            else
            {
                type = "xlsx";
                format = WriterFormat.Excel;
            }
            fileName += "." + type;

            writer.LoadReport(reportStream);
            writer.SetParameters(userParameters);
            writer.SetDataSourceCredentials(new List<DataSourceCredentials> { dataSourceCredentials });
            MemoryStream memoryStream = new MemoryStream();
            writer.Save(memoryStream, format);

            // Download the generated export document to the client side.
            memoryStream.Position = 0;
            return memoryStream;
        }
        #endregion
        #region FASTREPORT
        private ActionResult PrepareFileResultFastReport(string ext,
            byte[] renderedBytes)
        {
            string fileDownloadName;
            fileDownloadName = "RequestFiche." + ext;
            return File(renderedBytes, KnownMimeTypes.Get(fileDownloadName));
        }
        #endregion
    }
}