/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 515096995@qq.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddDataResourceInput } from '../models';
import { AdminResultInt64 } from '../models';
import { AdminResultListSysDataResource } from '../models';
import { DeleteDataResourceInput } from '../models';
import { UpdateDataResourceInput } from '../models';
/**
 * SysDataResourceApi - axios parameter creator
 * @export
 */
export const SysDataResourceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加数据资源
         * @param {AddDataResourceInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysDataResourceAddPost: async (body?: AddDataResourceInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysDataResource/add`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 删除数据资源
         * @param {DeleteDataResourceInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysDataResourceDeletePost: async (body?: DeleteDataResourceInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysDataResource/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取数据资源列表
         * @param {number} id 主键Id
         * @param {number} [pid] 父Id
         * @param {string} [name] 名称
         * @param {string} [value] 值
         * @param {string} [code] 编码
         * @param {number} [order] 排序
         * @param {string} [remark] 备注
         * @param {number} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysDataResourceListGet: async (id: number, pid?: number, name?: string, value?: string, code?: string, order?: number, remark?: string, status?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling sysDataResourceListGet.');
            }
            const localVarPath = `/sysDataResource/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (pid !== undefined) {
                localVarQueryParameter['Pid'] = pid;
            }

            if (name !== undefined) {
                localVarQueryParameter['Name'] = name;
            }

            if (value !== undefined) {
                localVarQueryParameter['Value'] = value;
            }

            if (code !== undefined) {
                localVarQueryParameter['Code'] = code;
            }

            if (order !== undefined) {
                localVarQueryParameter['Order'] = order;
            }

            if (remark !== undefined) {
                localVarQueryParameter['Remark'] = remark;
            }

            if (status !== undefined) {
                localVarQueryParameter['Status'] = status;
            }

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取数据资源树结构列表
         * @param {string} [rootValue] 根节点值
         * @param {string} [childName] 对应根节点下的名称
         * @param {boolean} [isContainSelf] 是否包含自己,默认不包含
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysDataResourceTreeGet: async (rootValue?: string, childName?: string, isContainSelf?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysDataResource/tree`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (rootValue !== undefined) {
                localVarQueryParameter['RootValue'] = rootValue;
            }

            if (childName !== undefined) {
                localVarQueryParameter['ChildName'] = childName;
            }

            if (isContainSelf !== undefined) {
                localVarQueryParameter['IsContainSelf'] = isContainSelf;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 更新数据资源
         * @param {UpdateDataResourceInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysDataResourceUpdatePost: async (body?: UpdateDataResourceInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysDataResource/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SysDataResourceApi - functional programming interface
 * @export
 */
export const SysDataResourceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加数据资源
         * @param {AddDataResourceInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysDataResourceAddPost(body?: AddDataResourceInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultInt64>>> {
            const localVarAxiosArgs = await SysDataResourceApiAxiosParamCreator(configuration).sysDataResourceAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除数据资源
         * @param {DeleteDataResourceInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysDataResourceDeletePost(body?: DeleteDataResourceInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDataResourceApiAxiosParamCreator(configuration).sysDataResourceDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取数据资源列表
         * @param {number} id 主键Id
         * @param {number} [pid] 父Id
         * @param {string} [name] 名称
         * @param {string} [value] 值
         * @param {string} [code] 编码
         * @param {number} [order] 排序
         * @param {string} [remark] 备注
         * @param {number} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysDataResourceListGet(id: number, pid?: number, name?: string, value?: string, code?: string, order?: number, remark?: string, status?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysDataResource>>> {
            const localVarAxiosArgs = await SysDataResourceApiAxiosParamCreator(configuration).sysDataResourceListGet(id, pid, name, value, code, order, remark, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取数据资源树结构列表
         * @param {string} [rootValue] 根节点值
         * @param {string} [childName] 对应根节点下的名称
         * @param {boolean} [isContainSelf] 是否包含自己,默认不包含
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysDataResourceTreeGet(rootValue?: string, childName?: string, isContainSelf?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListSysDataResource>>> {
            const localVarAxiosArgs = await SysDataResourceApiAxiosParamCreator(configuration).sysDataResourceTreeGet(rootValue, childName, isContainSelf, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新数据资源
         * @param {UpdateDataResourceInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysDataResourceUpdatePost(body?: UpdateDataResourceInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysDataResourceApiAxiosParamCreator(configuration).sysDataResourceUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysDataResourceApi - factory interface
 * @export
 */
export const SysDataResourceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加数据资源
         * @param {AddDataResourceInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysDataResourceAddPost(body?: AddDataResourceInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultInt64>> {
            return SysDataResourceApiFp(configuration).sysDataResourceAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除数据资源
         * @param {DeleteDataResourceInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysDataResourceDeletePost(body?: DeleteDataResourceInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDataResourceApiFp(configuration).sysDataResourceDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取数据资源列表
         * @param {number} id 主键Id
         * @param {number} [pid] 父Id
         * @param {string} [name] 名称
         * @param {string} [value] 值
         * @param {string} [code] 编码
         * @param {number} [order] 排序
         * @param {string} [remark] 备注
         * @param {number} [status] 状态
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysDataResourceListGet(id: number, pid?: number, name?: string, value?: string, code?: string, order?: number, remark?: string, status?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysDataResource>> {
            return SysDataResourceApiFp(configuration).sysDataResourceListGet(id, pid, name, value, code, order, remark, status, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取数据资源树结构列表
         * @param {string} [rootValue] 根节点值
         * @param {string} [childName] 对应根节点下的名称
         * @param {boolean} [isContainSelf] 是否包含自己,默认不包含
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysDataResourceTreeGet(rootValue?: string, childName?: string, isContainSelf?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListSysDataResource>> {
            return SysDataResourceApiFp(configuration).sysDataResourceTreeGet(rootValue, childName, isContainSelf, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新数据资源
         * @param {UpdateDataResourceInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysDataResourceUpdatePost(body?: UpdateDataResourceInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysDataResourceApiFp(configuration).sysDataResourceUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysDataResourceApi - object-oriented interface
 * @export
 * @class SysDataResourceApi
 * @extends {BaseAPI}
 */
export class SysDataResourceApi extends BaseAPI {
    /**
     * 
     * @summary 增加数据资源
     * @param {AddDataResourceInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDataResourceApi
     */
    public async sysDataResourceAddPost(body?: AddDataResourceInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultInt64>> {
        return SysDataResourceApiFp(this.configuration).sysDataResourceAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除数据资源
     * @param {DeleteDataResourceInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDataResourceApi
     */
    public async sysDataResourceDeletePost(body?: DeleteDataResourceInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDataResourceApiFp(this.configuration).sysDataResourceDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取数据资源列表
     * @param {number} id 主键Id
     * @param {number} [pid] 父Id
     * @param {string} [name] 名称
     * @param {string} [value] 值
     * @param {string} [code] 编码
     * @param {number} [order] 排序
     * @param {string} [remark] 备注
     * @param {number} [status] 状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDataResourceApi
     */
    public async sysDataResourceListGet(id: number, pid?: number, name?: string, value?: string, code?: string, order?: number, remark?: string, status?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysDataResource>> {
        return SysDataResourceApiFp(this.configuration).sysDataResourceListGet(id, pid, name, value, code, order, remark, status, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取数据资源树结构列表
     * @param {string} [rootValue] 根节点值
     * @param {string} [childName] 对应根节点下的名称
     * @param {boolean} [isContainSelf] 是否包含自己,默认不包含
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDataResourceApi
     */
    public async sysDataResourceTreeGet(rootValue?: string, childName?: string, isContainSelf?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListSysDataResource>> {
        return SysDataResourceApiFp(this.configuration).sysDataResourceTreeGet(rootValue, childName, isContainSelf, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新数据资源
     * @param {UpdateDataResourceInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysDataResourceApi
     */
    public async sysDataResourceUpdatePost(body?: UpdateDataResourceInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysDataResourceApiFp(this.configuration).sysDataResourceUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}