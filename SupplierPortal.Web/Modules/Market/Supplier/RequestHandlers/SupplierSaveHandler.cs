﻿using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SupplierPortal.Market.SupplierRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SupplierPortal.Market.SupplierRow;

namespace SupplierPortal.Market;

public interface ISupplierSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class SupplierSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierSaveHandler
{
    public SupplierSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}