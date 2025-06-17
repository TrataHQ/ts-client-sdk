# ActionInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the action | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**parameters** | **object** | Parameters for the action. It should be a JSON schema object | [default to undefined]
**endpoint** | [**Endpoint**](Endpoint.md) |  | [default to undefined]
**userWaitingText** | **string** |  | [optional] [default to undefined]
**userSuccessText** | **string** |  | [optional] [default to undefined]
**userErrorText** | **string** |  | [optional] [default to undefined]
**invocationTrigger** | [**ActionInvocationTrigger**](ActionInvocationTrigger.md) | Trigger who invokes the action | [default to undefined]

## Example

```typescript
import { ActionInput } from '@trata/ts-client-sdk';

const instance: ActionInput = {
    name,
    description,
    parameters,
    endpoint,
    userWaitingText,
    userSuccessText,
    userErrorText,
    invocationTrigger,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
