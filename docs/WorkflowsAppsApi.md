# WorkflowsAppsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAppV1WorkflowsAppsPost**](#createappv1workflowsappspost) | **POST** /v1/workflows/apps | Create App|
|[**deleteAppV1WorkflowsAppsAppIdDelete**](#deleteappv1workflowsappsappiddelete) | **DELETE** /v1/workflows/apps/{app_id} | Delete App|
|[**getConnectionsByAppIdV1WorkflowsAppsAppIdVersionsVersionConnectionsGet**](#getconnectionsbyappidv1workflowsappsappidversionsversionconnectionsget) | **GET** /v1/workflows/apps/{app_id}/versions/{version}/connections | Get Connections By App Id|
|[**readAppV1WorkflowsAppsAppIdGet**](#readappv1workflowsappsappidget) | **GET** /v1/workflows/apps/{app_id} | Read App|
|[**readAppsV1WorkflowsAppsGet**](#readappsv1workflowsappsget) | **GET** /v1/workflows/apps | Read Apps|
|[**updateAppV1WorkflowsAppsAppIdPut**](#updateappv1workflowsappsappidput) | **PUT** /v1/workflows/apps/{app_id} | Update App|

# **createAppV1WorkflowsAppsPost**
> AppResponse createAppV1WorkflowsAppsPost(appEntity)


### Example

```typescript
import {
    WorkflowsAppsApi,
    Configuration,
    AppEntity
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsAppsApi(configuration);

let appEntity: AppEntity; //

const { status, data } = await apiInstance.createAppV1WorkflowsAppsPost(
    appEntity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appEntity** | **AppEntity**|  | |


### Return type

**AppResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAppV1WorkflowsAppsAppIdDelete**
> AgenticWorkflowModelsBaseBaseResponse deleteAppV1WorkflowsAppsAppIdDelete()


### Example

```typescript
import {
    WorkflowsAppsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsAppsApi(configuration);

let appId: string; // (default to undefined)
let version: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteAppV1WorkflowsAppsAppIdDelete(
    appId,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appId** | [**string**] |  | defaults to undefined|
| **version** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AgenticWorkflowModelsBaseBaseResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConnectionsByAppIdV1WorkflowsAppsAppIdVersionsVersionConnectionsGet**
> Array<AgenticWorkflowDbModelsConnection> getConnectionsByAppIdV1WorkflowsAppsAppIdVersionsVersionConnectionsGet()


### Example

```typescript
import {
    WorkflowsAppsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsAppsApi(configuration);

let appId: string; // (default to undefined)
let version: string; // (default to undefined)

const { status, data } = await apiInstance.getConnectionsByAppIdV1WorkflowsAppsAppIdVersionsVersionConnectionsGet(
    appId,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appId** | [**string**] |  | defaults to undefined|
| **version** | [**string**] |  | defaults to undefined|


### Return type

**Array<AgenticWorkflowDbModelsConnection>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readAppV1WorkflowsAppsAppIdGet**
> AppResponse readAppV1WorkflowsAppsAppIdGet()


### Example

```typescript
import {
    WorkflowsAppsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsAppsApi(configuration);

let appId: string; // (default to undefined)
let version: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.readAppV1WorkflowsAppsAppIdGet(
    appId,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appId** | [**string**] |  | defaults to undefined|
| **version** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AppResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readAppsV1WorkflowsAppsGet**
> Array<AppResponse> readAppsV1WorkflowsAppsGet()


### Example

```typescript
import {
    WorkflowsAppsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsAppsApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)

const { status, data } = await apiInstance.readAppsV1WorkflowsAppsGet(
    skip,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skip** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 100|


### Return type

**Array<AppResponse>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAppV1WorkflowsAppsAppIdPut**
> AppResponse updateAppV1WorkflowsAppsAppIdPut(appEntity)


### Example

```typescript
import {
    WorkflowsAppsApi,
    Configuration,
    AppEntity
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsAppsApi(configuration);

let appId: string; // (default to undefined)
let appEntity: AppEntity; //
let version: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.updateAppV1WorkflowsAppsAppIdPut(
    appId,
    appEntity,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appEntity** | **AppEntity**|  | |
| **appId** | [**string**] |  | defaults to undefined|
| **version** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AppResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

