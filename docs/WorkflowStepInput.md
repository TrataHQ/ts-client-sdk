# WorkflowStepInput

Flow Step Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stepId** | **string** | The id of the step | [optional] [default to undefined]
**appConnectionId** | **string** |  | [optional] [default to undefined]
**appActionId** | **string** | The app action id of the app | [optional] [default to undefined]
**appId** | **string** | The id of the app | [optional] [default to undefined]
**appName** | **string** | The name of the app. It must match the app name in AppDefinition implementation | [optional] [default to undefined]
**appVersion** | **string** | The version of the app. It must match the app version in AppDefinition implementation | [optional] [default to undefined]
**dataResolver** | **string** |  | [optional] [default to undefined]
**nextStepResolver** | [**NextStepResolver**](NextStepResolver.md) | Resolver for determining the next step | [default to undefined]

## Example

```typescript
import { WorkflowStepInput } from '@trata/ts-client-sdk';

const instance: WorkflowStepInput = {
    stepId,
    appConnectionId,
    appActionId,
    appId,
    appName,
    appVersion,
    dataResolver,
    nextStepResolver,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
