﻿using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace SupplierPortal.AppServices;
public class UserAccessor(IHttpContextAccessor httpContextAccessor) : IUserAccessor, IImpersonator
{
    private readonly ImpersonatingUserAccessor impersonator = new(
        new HttpContextUserAccessor(httpContextAccessor),
        new HttpContextItemsAccessor(httpContextAccessor));

    public ClaimsPrincipal User => impersonator.User;

    public void Impersonate(ClaimsPrincipal user)
    {
        impersonator.Impersonate(user);
    }

    public void UndoImpersonate()
    {
        impersonator.UndoImpersonate();
    }
}