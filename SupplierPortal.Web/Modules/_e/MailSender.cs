using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace MailSender.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public MailController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("send")]
        public IActionResult SendMail(string to, string subject, string body)
        {
            try
            {
                var mailSettings = _configuration.GetSection("MailSettings").Get<MailSettings>();

                var fromAddress = new MailAddress(mailSettings.FromAddress, mailSettings.FromName);
                var toAddress = new MailAddress(to, "Receiver Name");

                var smtp = new SmtpClient
                {
                    Host = mailSettings.SmtpHost,
                    Port = mailSettings.SmtpPort,
                    EnableSsl = mailSettings.EnableSsl,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential(mailSettings.FromAddress, mailSettings.Password)
                };

                using (var message = new MailMessage(fromAddress, toAddress)
                {
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true // HTML içeriğe izin vermek için
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
    }

    public class MailSettings
    {
        public string FromAddress = "b.deniz20031@gmail.com";
        public string FromName = "Barış";
        public string SmtpHost = "smtp.gmail.com";
        public int SmtpPort = 587;
        public bool EnableSsl = true;
        public string Password = "bmxrfbfbmetfrvyk";
    }
}