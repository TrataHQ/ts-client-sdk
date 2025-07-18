# WorkflowsConnectionsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createConnectionV1WorkflowsConnectionsPost**](#createconnectionv1workflowsconnectionspost) | **POST** /v1/workflows/connections | Create Connection|
|[**deleteConnectionV1WorkflowsConnectionsConnectionIdDelete**](#deleteconnectionv1workflowsconnectionsconnectioniddelete) | **DELETE** /v1/workflows/connections/{connection_id} | Delete Connection|
|[**readConnectionV1WorkflowsConnectionsConnectionIdGet**](#readconnectionv1workflowsconnectionsconnectionidget) | **GET** /v1/workflows/connections/{connection_id} | Read Connection|
|[**readConnectionsV1WorkflowsConnectionsGet**](#readconnectionsv1workflowsconnectionsget) | **GET** /v1/workflows/connections | Read Connections|
|[**updateConnectionV1WorkflowsConnectionsConnectionIdPut**](#updateconnectionv1workflowsconnectionsconnectionidput) | **PUT** /v1/workflows/connections/{connection_id} | Update Connection|

# **createConnectionV1WorkflowsConnectionsPost**
> AgenticWorkflowDbModelsConnection createConnectionV1WorkflowsConnectionsPost(connectionCore)


### Example

```typescript
import {
    WorkflowsConnectionsApi,
    Configuration,
    ConnectionCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsConnectionsApi(configuration);

let connectionCore: ConnectionCore; //

const { status, data } = await apiInstance.createConnectionV1WorkflowsConnectionsPost(
    connectionCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectionCore** | **ConnectionCore**|  | |


### Return type

**AgenticWorkflowDbModelsConnection**

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

# **deleteConnectionV1WorkflowsConnectionsConnectionIdDelete**
> AgenticWorkflowModelsBaseBaseResponse deleteConnectionV1WorkflowsConnectionsConnectionIdDelete()


### Example

```typescript
import {
    WorkflowsConnectionsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsConnectionsApi(configuration);

let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteConnectionV1WorkflowsConnectionsConnectionIdDelete(
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectionId** | [**string**] |  | defaults to undefined|


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

# **readConnectionV1WorkflowsConnectionsConnectionIdGet**
> AgenticWorkflowDbModelsConnection readConnectionV1WorkflowsConnectionsConnectionIdGet()


### Example

```typescript
import {
    WorkflowsConnectionsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsConnectionsApi(configuration);

let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.readConnectionV1WorkflowsConnectionsConnectionIdGet(
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**AgenticWorkflowDbModelsConnection**

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

# **readConnectionsV1WorkflowsConnectionsGet**
> Array<AgenticWorkflowDbModelsConnection> readConnectionsV1WorkflowsConnectionsGet()


### Example

```typescript
import {
    WorkflowsConnectionsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsConnectionsApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)

const { status, data } = await apiInstance.readConnectionsV1WorkflowsConnectionsGet(
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

# **updateConnectionV1WorkflowsConnectionsConnectionIdPut**
> AgenticWorkflowDbModelsConnection updateConnectionV1WorkflowsConnectionsConnectionIdPut(connectionCore)


### Example

```typescript
import {
    WorkflowsConnectionsApi,
    Configuration,
    ConnectionCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsConnectionsApi(configuration);

let connectionId: string; // (default to undefined)
let connectionCore: ConnectionCore; //

const { status, data } = await apiInstance.updateConnectionV1WorkflowsConnectionsConnectionIdPut(
    connectionId,
    connectionCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectionCore** | **ConnectionCore**|  | |
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**AgenticWorkflowDbModelsConnection**

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

