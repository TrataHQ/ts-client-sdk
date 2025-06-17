# WorkflowsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWorkflowV1WorkflowsPost**](#createworkflowv1workflowspost) | **POST** /v1/workflows/ | Create Workflow|
|[**deleteWorkflowV1WorkflowsWorkflowIdDelete**](#deleteworkflowv1workflowsworkflowiddelete) | **DELETE** /v1/workflows/{workflow_id} | Delete Workflow|
|[**readWorkflowV1WorkflowsWorkflowIdGet**](#readworkflowv1workflowsworkflowidget) | **GET** /v1/workflows/{workflow_id} | Read Workflow|
|[**readWorkflowsV1WorkflowsGet**](#readworkflowsv1workflowsget) | **GET** /v1/workflows/ | Read Workflows|
|[**triggerWorkflowStepV1WorkflowsWorkflowIdStepStepIdTriggerPost**](#triggerworkflowstepv1workflowsworkflowidstepstepidtriggerpost) | **POST** /v1/workflows/{workflow_id}/step/{step_id}/trigger | Trigger Workflow Step|
|[**updateWorkflowV1WorkflowsWorkflowIdPut**](#updateworkflowv1workflowsworkflowidput) | **PUT** /v1/workflows/{workflow_id} | Update Workflow|
|[**uploadFileV1WorkflowsWorkflowIdFilePost**](#uploadfilev1workflowsworkflowidfilepost) | **POST** /v1/workflows/{workflow_id}/file | Upload File|

# **createWorkflowV1WorkflowsPost**
> Workflow createWorkflowV1WorkflowsPost(workflowCore)


### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    WorkflowCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowCore: WorkflowCore; //

const { status, data } = await apiInstance.createWorkflowV1WorkflowsPost(
    workflowCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowCore** | **WorkflowCore**|  | |


### Return type

**Workflow**

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

# **deleteWorkflowV1WorkflowsWorkflowIdDelete**
> AgenticWorkflowModelsBaseBaseResponse deleteWorkflowV1WorkflowsWorkflowIdDelete()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteWorkflowV1WorkflowsWorkflowIdDelete(
    workflowId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] |  | defaults to undefined|


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

# **readWorkflowV1WorkflowsWorkflowIdGet**
> Workflow readWorkflowV1WorkflowsWorkflowIdGet()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)

const { status, data } = await apiInstance.readWorkflowV1WorkflowsWorkflowIdGet(
    workflowId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] |  | defaults to undefined|


### Return type

**Workflow**

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

# **readWorkflowsV1WorkflowsGet**
> Array<Workflow> readWorkflowsV1WorkflowsGet()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)
let app: AgenticWorkflowAdkModelsWorkflowAppEnum; // (optional) (default to undefined)

const { status, data } = await apiInstance.readWorkflowsV1WorkflowsGet(
    skip,
    limit,
    app
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skip** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 100|
| **app** | **AgenticWorkflowAdkModelsWorkflowAppEnum** |  | (optional) defaults to undefined|


### Return type

**Array<Workflow>**

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

# **triggerWorkflowStepV1WorkflowsWorkflowIdStepStepIdTriggerPost**
> WorkflowStepTriggerResponse triggerWorkflowStepV1WorkflowsWorkflowIdStepStepIdTriggerPost(workflowStepTriggerRequest)


### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    WorkflowStepTriggerRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)
let stepId: string; // (default to undefined)
let workflowStepTriggerRequest: WorkflowStepTriggerRequest; //

const { status, data } = await apiInstance.triggerWorkflowStepV1WorkflowsWorkflowIdStepStepIdTriggerPost(
    workflowId,
    stepId,
    workflowStepTriggerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowStepTriggerRequest** | **WorkflowStepTriggerRequest**|  | |
| **workflowId** | [**string**] |  | defaults to undefined|
| **stepId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowStepTriggerResponse**

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

# **updateWorkflowV1WorkflowsWorkflowIdPut**
> Workflow updateWorkflowV1WorkflowsWorkflowIdPut(workflowCore)


### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    WorkflowCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)
let workflowCore: WorkflowCore; //

const { status, data } = await apiInstance.updateWorkflowV1WorkflowsWorkflowIdPut(
    workflowId,
    workflowCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowCore** | **WorkflowCore**|  | |
| **workflowId** | [**string**] |  | defaults to undefined|


### Return type

**Workflow**

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

# **uploadFileV1WorkflowsWorkflowIdFilePost**
> UploadFileResponse uploadFileV1WorkflowsWorkflowIdFilePost()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)
let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadFileV1WorkflowsWorkflowIdFilePost(
    workflowId,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] |  | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**UploadFileResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

