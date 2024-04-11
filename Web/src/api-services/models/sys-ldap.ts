/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { StatusEnum } from './status-enum';
 /**
 * 系统域登录信息配置表
 *
 * @export
 * @interface SysLdap
 */
export interface SysLdap {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysLdap
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof SysLdap
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof SysLdap
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof SysLdap
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof SysLdap
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof SysLdap
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof SysLdap
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof SysLdap
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof SysLdap
     */
    tenantId?: number | null;

    /**
     * 主机
     *
     * @type {string}
     * @memberof SysLdap
     */
    host: string;

    /**
     * 端口
     *
     * @type {number}
     * @memberof SysLdap
     */
    port?: number;

    /**
     * 用户搜索基准
     *
     * @type {string}
     * @memberof SysLdap
     */
    baseDn: string;

    /**
     * 绑定DN(有管理权限制的用户)
     *
     * @type {string}
     * @memberof SysLdap
     */
    bindDn: string;

    /**
     * 绑定密码(有管理权限制的用户密码)
     *
     * @type {string}
     * @memberof SysLdap
     */
    bindPass: string;

    /**
     * 用户过滤规则
     *
     * @type {string}
     * @memberof SysLdap
     */
    authFilter: string;

    /**
     * Ldap版本
     *
     * @type {number}
     * @memberof SysLdap
     */
    version?: number;

    /**
     * @type {StatusEnum}
     * @memberof SysLdap
     */
    status?: StatusEnum;
}
