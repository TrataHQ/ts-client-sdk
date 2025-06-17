# Workflow

Workflow represents a sequence of steps that can be performed by an app

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**name** | **string** | The name of the workflow | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**version** | **string** | The version of the workflow | [optional] [default to undefined]
**steps** | [**{ [key: string]: WorkflowStepOutput; }**](WorkflowStepOutput.md) | The steps of the workflow | [default to undefined]
**startStepId** | **string** | The id of the start step | [optional] [default to undefined]
**id** | **string** | The unique identifier of the workflow | [optional] [default to undefined]

## Example

```typescript
import { Workflow } from '@trata/ts-client-sdk';

const instance: Workflow = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    name,
    description,
    version,
    steps,
    startStepId,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
