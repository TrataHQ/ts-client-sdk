# WorkflowsExecutionsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeWorkflowV1WorkflowsExecutionsWorkflowIdExecutePost**](#executeworkflowv1workflowsexecutionsworkflowidexecutepost) | **POST** /v1/workflows/executions/{workflow_id}/execute | Execute Workflow|
|[**getWorkflowStatusV1WorkflowsExecutionsWorkflowIdRunsRunIdGet**](#getworkflowstatusv1workflowsexecutionsworkflowidrunsrunidget) | **GET** /v1/workflows/executions/{workflow_id}/runs/{run_id} | Get Workflow Status|
|[**listWorkflowRunsV1WorkflowsExecutionsWorkflowIdRunsGet**](#listworkflowrunsv1workflowsexecutionsworkflowidrunsget) | **GET** /v1/workflows/executions/{workflow_id}/runs | List Workflow Runs|
|[**triggerWorkflowV1WorkflowsExecutionsWorkflowIdTriggerPost**](#triggerworkflowv1workflowsexecutionsworkflowidtriggerpost) | **POST** /v1/workflows/executions/{workflow_id}/trigger | Trigger Workflow|

# **executeWorkflowV1WorkflowsExecutionsWorkflowIdExecutePost**
> WorkflowExecution executeWorkflowV1WorkflowsExecutionsWorkflowIdExecutePost(requestBody)

Execute a workflow. This is an Sync call. This returns the status of the workflow

### Example

```typescript
import {
    WorkflowsExecutionsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsExecutionsApi(configuration);

let workflowId: string; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.executeWorkflowV1WorkflowsExecutionsWorkflowIdExecutePost(
    workflowId,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **workflowId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowExecution**

### Authorization

No authorization required

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

# **getWorkflowStatusV1WorkflowsExecutionsWorkflowIdRunsRunIdGet**
> WorkflowExecution getWorkflowStatusV1WorkflowsExecutionsWorkflowIdRunsRunIdGet()

Get the status of a workflow given the run id

### Example

```typescript
import {
    WorkflowsExecutionsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsExecutionsApi(configuration);

let runId: string; // (default to undefined)
let workflowId: string; // (default to undefined)

const { status, data } = await apiInstance.getWorkflowStatusV1WorkflowsExecutionsWorkflowIdRunsRunIdGet(
    runId,
    workflowId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **runId** | [**string**] |  | defaults to undefined|
| **workflowId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowExecution**

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

# **listWorkflowRunsV1WorkflowsExecutionsWorkflowIdRunsGet**
> Array<WorkflowExecution> listWorkflowRunsV1WorkflowsExecutionsWorkflowIdRunsGet()


### Example

```typescript
import {
    WorkflowsExecutionsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsExecutionsApi(configuration);

let workflowId: string; // (default to undefined)
let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)

const { status, data } = await apiInstance.listWorkflowRunsV1WorkflowsExecutionsWorkflowIdRunsGet(
    workflowId,
    skip,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] |  | defaults to undefined|
| **skip** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 10|


### Return type

**Array<WorkflowExecution>**

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

# **triggerWorkflowV1WorkflowsExecutionsWorkflowIdTriggerPost**
> WorkflowExecution triggerWorkflowV1WorkflowsExecutionsWorkflowIdTriggerPost()

Trigger a workflow execution. This is an Async call. This returns a workflow id which can be queried to get the status of the workflow

### Example

```typescript
import {
    WorkflowsExecutionsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsExecutionsApi(configuration);

let workflowId: string; // (default to undefined)
let requestBody: { [key: string]: any; }; // (optional)

const { status, data } = await apiInstance.triggerWorkflowV1WorkflowsExecutionsWorkflowIdTriggerPost(
    workflowId,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **workflowId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowExecution**

### Authorization

No authorization required

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

