# UserModuleAttemptCore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | The ID of the user who is taking the module | [default to undefined]
**courseId** | **string** | The ID of the course | [default to undefined]
**moduleId** | **string** | The ID of the module | [default to undefined]
**attemptStatus** | [**ModuleAttemptStatus**](ModuleAttemptStatus.md) | The completion status of the module | [default to undefined]
**attemptScore** | **number** | The score of the module out of 100 | [default to undefined]
**feedbackId** | **string** | The ID of the feedback | [default to undefined]

## Example

```typescript
import { UserModuleAttemptCore } from '@trata/ts-client-sdk';

const instance: UserModuleAttemptCore = {
    userId,
    courseId,
    moduleId,
    attemptStatus,
    attemptScore,
    feedbackId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
