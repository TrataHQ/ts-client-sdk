# ModuleAnalytics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**module** | [**Module**](Module.md) |  | [default to undefined]
**numberOfAttempts** | **number** | The number of attempts | [default to undefined]
**lastAttemptStatus** | [**ModuleAttemptStatus**](ModuleAttemptStatus.md) |  | [default to undefined]
**isModuleCompleted** | **boolean** | Whether the module is completed | [default to undefined]

## Example

```typescript
import { ModuleAnalytics } from '@trata/ts-client-sdk';

const instance: ModuleAnalytics = {
    module,
    numberOfAttempts,
    lastAttemptStatus,
    isModuleCompleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
