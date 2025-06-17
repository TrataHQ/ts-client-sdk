# WorkflowContext

Workflow Context Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orgId** | **string** | The ID of the organization | [default to undefined]
**workflowId** | **string** | The ID of the workflow | [default to undefined]
**runId** | **string** | The ID of the run | [default to undefined]
**stepInput** | **object** | The input of the step | [default to undefined]
**stepResponse** | **object** | The response of the step | [default to undefined]

## Example

```typescript
import { WorkflowContext } from '@trata/ts-client-sdk';

const instance: WorkflowContext = {
    orgId,
    workflowId,
    runId,
    stepInput,
    stepResponse,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
