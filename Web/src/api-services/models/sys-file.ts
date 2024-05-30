/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 系统文件表
 *
 * @export
 * @interface SysFile
 */
export interface SysFile {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysFile
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof SysFile
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof SysFile
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof SysFile
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof SysFile
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof SysFile
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof SysFile
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof SysFile
     */
    isDelete?: boolean;

    /**
     * 提供者
     *
     * @type {string}
     * @memberof SysFile
     */
    provider?: string | null;

    /**
     * 仓储名称
     *
     * @type {string}
     * @memberof SysFile
     */
    bucketName?: string | null;

    /**
     * 文件名称（源文件名）
     *
     * @type {string}
     * @memberof SysFile
     */
    fileName?: string | null;

    /**
     * 文件后缀
     *
     * @type {string}
     * @memberof SysFile
     */
    suffix?: string | null;

    /**
     * 存储路径
     *
     * @type {string}
     * @memberof SysFile
     */
    filePath?: string | null;

    /**
     * 文件大小KB
     *
     * @type {number}
     * @memberof SysFile
     */
    sizeKb?: number;

    /**
     * 文件大小信息-计算后的
     *
     * @type {string}
     * @memberof SysFile
     */
    sizeInfo?: string | null;

    /**
     * 外链地址-OSS上传后生成外链地址方便前端预览
     *
     * @type {string}
     * @memberof SysFile
     */
    url?: string | null;

    /**
     * 文件MD5
     *
     * @type {string}
     * @memberof SysFile
     */
    fileMd5?: string | null;

    /**
     * 关联对象名称（如子对象）
     *
     * @type {string}
     * @memberof SysFile
     */
    relationName?: string | null;

    /**
     * 关联对象Id
     *
     * @type {number}
     * @memberof SysFile
     */
    relationId?: number | null;

    /**
     * 所属Id（如主对象）
     *
     * @type {number}
     * @memberof SysFile
     */
    belongId?: number | null;

    /**
     * 文件类别
     *
     * @type {string}
     * @memberof SysFile
     */
    fileType?: string | null;
}
