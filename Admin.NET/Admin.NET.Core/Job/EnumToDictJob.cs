// Admin.NET 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。使用本项目应遵守相关法律法规和许可证的要求。
//
// 本项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。许可证位于源代码树根目录中的 LICENSE-MIT 和 LICENSE-APACHE 文件。
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！

namespace Admin.NET.Core;

/// <summary>
/// 枚举转字典
/// </summary>
[JobDetail("job_EnumToDictJob", Description = "枚举转字典", GroupName = "default", Concurrent = false)]
[PeriodSeconds(1, TriggerId = "trigger_EnumToDictJob", Description = "枚举转字典", MaxNumberOfRuns = 1, RunOnStart = true)]
public class EnumToDictJob : IJob
{
    private readonly IServiceScopeFactory _scopeFactory;
    private readonly IJsonSerializerProvider _jsonSerializer;

    public EnumToDictJob(IServiceScopeFactory scopeFactory, IJsonSerializerProvider jsonSerializer)
    {
        _scopeFactory = scopeFactory;
        _jsonSerializer = jsonSerializer;
    }

    public async Task ExecuteAsync(JobExecutingContext context, CancellationToken stoppingToken)
    {
        using var serviceScope = _scopeFactory.CreateScope();
        var sysEnumService = serviceScope.ServiceProvider.GetRequiredService<SysEnumService>();
        var db = serviceScope.ServiceProvider.GetRequiredService<ISqlSugarClient>().CopyNew();

        var enumTypeList = sysEnumService.GetEnumTypeList();
        var enumCodeList = enumTypeList.Select(u => u.TypeName);
        var sysDictTypeCodeList = await db.Queryable<SysDictType>().Where(u => enumCodeList.Contains(u.Code)).Select(u => u.Code).ToListAsync(stoppingToken);

        // 更新的枚举转换字典
        var uEnumType = enumTypeList.Where(u => sysDictTypeCodeList.Contains(u.TypeName)).ToList();
        var waitUpdateSysDictType = await db.Queryable<SysDictType>().Where(u => uEnumType.Any(a => a.TypeName == u.Code)).ToListAsync(stoppingToken);
        var waitUpdateSysDictTypeDict = waitUpdateSysDictType.ToDictionary(u => u.Code, u => u);
        var waitUpdateSysDictData = await db.Queryable<SysDictData>().Where(u => uEnumType.Any(a => a.TypeName == u.DictType.Code)).ToListAsync(stoppingToken);
        var uSysDictType = new List<SysDictType>();
        var uSysDictData = new List<SysDictData>();
        if (uEnumType.Count > 0)
        {
            uEnumType.ForEach(e =>
            {
                if (waitUpdateSysDictTypeDict.TryGetValue(e.TypeName, out SysDictType value))
                {
                    var uDictType = value;
                    uDictType.Name = e.TypeDescribe;
                    uDictType.Remark = e.TypeRemark;
                    var uDictData = waitUpdateSysDictData.Where(u => u.DictTypeId == uDictType.Id).ToList();
                    if (uDictData.Count > 0)
                    {
                        uDictData.ForEach(dictData =>
                        {
                            var enumData = e.EnumEntities.Where(u => dictData.Code == u.Name).FirstOrDefault();
                            if (enumData != null)
                            {
                                dictData.Value = enumData.Value.ToString();
                                dictData.Code = enumData.Name;
                                dictData.OrderNo = enumData.Value + 10;
                                dictData.Name = enumData.Describe;
                                dictData.TagType = enumData.Theme != "" ? enumData.Theme : "info";
                                uSysDictData.Add(dictData);
                            }
                        });
                    }
                    if (!uSysDictType.Any(u => u.Id == uDictType.Id))
                        uSysDictType.Add(uDictType);
                }
            });
            try
            {
                db.BeginTran();

                if (uSysDictType.Count > 0)
                    await db.Updateable(uSysDictType).ExecuteCommandAsync(stoppingToken);

                if (uSysDictData.Count > 0)
                    await db.Updateable(uSysDictData).ExecuteCommandAsync(stoppingToken);

                db.CommitTran();
            }
            catch (Exception error)
            {
                db.RollbackTran();
                Log.Error($"{context.Trigger.Description}更新枚举转换字典入库错误：" + _jsonSerializer.Serialize(error));
                throw new Exception($"{context.Trigger.Description}更新枚举转换字典入库错误");
            }
        }

        // 新增的枚举转换字典
        var iEnumType = enumTypeList.Where(u => !sysDictTypeCodeList.Contains(u.TypeName)).ToList();
        if (iEnumType.Count > 0)
        {
            // 新增字典类型
            var iDictType = iEnumType.Select(u => new SysDictType
            {
                Id = YitIdHelper.NextId(),
                Code = u.TypeName,
                Name = u.TypeDescribe,
                Remark = u.TypeRemark,
                Status = StatusEnum.Enable
            }).ToList();
            // 新增字典数据
            var dictData = iEnumType.Join(iDictType, t1 => t1.TypeName, t2 => t2.Code, (t1, t2) => new
            {
                data = t1.EnumEntities.Select(u => new SysDictData
                {
                    Id = YitIdHelper.NextId(), // 性能优化，使用BulkCopyAsync必须手动获取Id
                    DictTypeId = t2.Id,
                    Name = u.Describe,
                    Value = u.Value.ToString(),
                    Code = u.Name,
                    Remark = t2.Remark,
                    OrderNo = u.Value + 10,
                    TagType = u.Theme != "" ? u.Theme : "info",
                }).ToList()
            }).ToList();
            var iDictData = new List<SysDictData>();
            dictData.ForEach(item =>
            {
                iDictData.AddRange(item.data);
            });
            try
            {
                db.BeginTran();

                if (iDictType.Count > 0)
                    await db.Insertable(iDictType).ExecuteCommandAsync(stoppingToken);

                if (iDictData.Count > 0)
                    await db.Insertable(iDictData).ExecuteCommandAsync(stoppingToken);

                db.CommitTran();
            }
            catch (Exception error)
            {
                db.RollbackTran();
                Log.Error($"{context.Trigger.Description}新增枚举转换字典入库错误：" + _jsonSerializer.Serialize(error));
                throw new Exception($"{context.Trigger.Description}新增枚举转换字典入库错误");
            }
        }

        var originColor = Console.ForegroundColor;
        Console.ForegroundColor = ConsoleColor.Green;
        Console.WriteLine($"【{DateTime.Now}】系统枚举转换字典");
        Console.ForegroundColor = originColor;
    }
}