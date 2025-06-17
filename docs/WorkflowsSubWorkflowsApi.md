# WorkflowsSubWorkflowsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSubWorkflowsV1WorkflowsStepsSubWorkflowsPost**](#getsubworkflowsv1workflowsstepssubworkflowspost) | **POST** /v1/workflows/steps/sub_workflows | Get Sub Workflows|

# **getSubWorkflowsV1WorkflowsStepsSubWorkflowsPost**
> Array<Workflow> getSubWorkflowsV1WorkflowsStepsSubWorkflowsPost(workflowStepInput)

Returns all sub workflows which can be invoked for a given workflow step

### Example

```typescript
import {
    WorkflowsSubWorkflowsApi,
    Configuration,
    WorkflowStepInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsSubWorkflowsApi(configuration);

let workflowStepInput: WorkflowStepInput; //

const { status, data } = await apiInstance.getSubWorkflowsV1WorkflowsStepsSubWorkflowsPost(
    workflowStepInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowStepInput** | **WorkflowStepInput**|  | |


### Return type

**Array<Workflow>**

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

