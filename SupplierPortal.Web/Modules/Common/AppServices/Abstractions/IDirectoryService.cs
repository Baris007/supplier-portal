﻿
namespace SupplierPortal;

public interface IDirectoryService
{
    AppServices.DirectoryEntry Validate(string username, string password);
}