﻿using MyRow = SupplierPortal.Administration.RoleRow;

namespace SupplierPortal.Administration;
public static class RoleHelper
{
    private static MyRow.RowFields Fld { get { return MyRow.Fields; } }
    public static Dictionary<int, MyRow> GetRoleById(ITwoLevelCache cache, ISqlConnections sqlConnections)
    {
        if (cache is null)
            throw new ArgumentNullException(nameof(cache));

        return cache.GetLocalStoreOnly("RoleById", TimeSpan.Zero,
            Fld.GenerationKey, () =>
            {
                if (sqlConnections is null)
                    throw new ArgumentNullException(nameof(sqlConnections));

                using var connection = sqlConnections.NewFor<MyRow>();
                return connection.List<MyRow>().ToDictionary(x => x.RoleId.Value);
            });
    }
}
