# WorkflowCore

Core Workflow Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the workflow | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**version** | **string** | The version of the workflow | [optional] [default to undefined]
**steps** | [**{ [key: string]: WorkflowStepInput; }**](WorkflowStepInput.md) | The steps of the workflow | [default to undefined]
**startStepId** | **string** | The id of the start step | [optional] [default to undefined]

## Example

```typescript
import { WorkflowCore } from '@trata/ts-client-sdk';

const instance: WorkflowCore = {
    name,
    description,
    version,
    steps,
    startStepId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
