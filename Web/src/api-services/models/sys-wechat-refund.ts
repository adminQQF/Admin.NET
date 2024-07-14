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
 * 系统微信支付退款表
 *
 * @export
 * @interface SysWechatRefund
 */
export interface SysWechatRefund {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysWechatRefund
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof SysWechatRefund
     */
    createTime?: Date;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof SysWechatRefund
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof SysWechatRefund
     */
    createUserId?: number;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof SysWechatRefund
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof SysWechatRefund
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof SysWechatRefund
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof SysWechatRefund
     */
    isDelete?: boolean;

    /**
     * 定单主键
     *
     * @type {number}
     * @memberof SysWechatRefund
     */
    wechatPayId?: number;

    /**
     * 商户退款号
     *
     * @type {string}
     * @memberof SysWechatRefund
     */
    outRefundNumber: string;

    /**
     * 退款订单号
     *
     * @type {string}
     * @memberof SysWechatRefund
     */
    transactionId: string;

    /**
     * 退款原因
     *
     * @type {string}
     * @memberof SysWechatRefund
     */
    reason?: string | null;

    /**
     * 退款渠道
     *
     * @type {string}
     * @memberof SysWechatRefund
     */
    channel?: string | null;

    /**
     * 退款入账账户
     *
     * @type {string}
     * @memberof SysWechatRefund
     */
    userReceivedAccount?: string | null;

    /**
     * 退款状态
     *
     * @type {string}
     * @memberof SysWechatRefund
     */
    tradeState?: string | null;

    /**
     * 交易状态描述
     *
     * @type {string}
     * @memberof SysWechatRefund
     */
    tradeStateDescription?: string | null;

    /**
     * 订单总金额
     *
     * @type {number}
     * @memberof SysWechatRefund
     */
    refund?: number;

    /**
     * 支完成时间
     *
     * @type {Date}
     * @memberof SysWechatRefund
     */
    successTime?: Date | null;

    /**
     * 回调通知地址
     *
     * @type {string}
     * @memberof SysWechatRefund
     */
    notifyUrl?: string | null;

    /**
     * 备注
     *
     * @type {string}
     * @memberof SysWechatRefund
     */
    remark?: string | null;
}
