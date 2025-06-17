# ActionOutput

Action entity to store the actions which can be performed by ai agents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**parameters** | **object** |  | [optional] [default to undefined]
**endpoint** | **object** |  | [optional] [default to undefined]
**invocationTrigger** | **string** |  | [optional] [default to undefined]
**userWaitingText** | **string** |  | [optional] [default to undefined]
**userSuccessText** | **string** |  | [optional] [default to undefined]
**userErrorText** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ActionOutput } from '@trata/ts-client-sdk';

const instance: ActionOutput = {
    id,
    orgId,
    name,
    description,
    parameters,
    endpoint,
    invocationTrigger,
    userWaitingText,
    userSuccessText,
    userErrorText,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
