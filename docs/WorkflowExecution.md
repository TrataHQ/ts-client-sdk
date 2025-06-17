# WorkflowExecution

Core Workflow Execution Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflowName** | **string** | The name of the workflow | [default to undefined]
**workflowStartTimestamp** | **string** |  | [default to undefined]
**workflowEndTimestamp** | **string** |  | [default to undefined]
**workflowId** | **string** | The id of the workflow | [default to undefined]
**workflowRunId** | **string** | The run id of the workflow | [default to undefined]
**status** | **string** | The status of the workflow execution | [default to undefined]
**activityInfo** | [**Array&lt;WorkflowActivityInfo&gt;**](WorkflowActivityInfo.md) | The activity info of the workflow execution | [default to undefined]
**result** | **object** | The final result of the workflow execution | [default to undefined]

## Example

```typescript
import { WorkflowExecution } from '@trata/ts-client-sdk';

const instance: WorkflowExecution = {
    workflowName,
    workflowStartTimestamp,
    workflowEndTimestamp,
    workflowId,
    workflowRunId,
    status,
    activityInfo,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
