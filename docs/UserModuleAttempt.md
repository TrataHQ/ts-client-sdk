# UserModuleAttempt

UserModuleAttempt represents a user\'s attempt at a module

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**userId** | **string** | The ID of the user who is taking the module | [default to undefined]
**courseId** | **string** | The ID of the course | [default to undefined]
**moduleId** | **string** | The ID of the module | [default to undefined]
**attemptStatus** | [**ModuleAttemptStatus**](ModuleAttemptStatus.md) | The completion status of the module | [default to undefined]
**attemptScore** | **number** | The score of the module out of 100 | [default to undefined]
**feedbackId** | **string** | The ID of the feedback | [default to undefined]
**id** | **string** | The unique identifier of the user module attempt | [optional] [default to undefined]

## Example

```typescript
import { UserModuleAttempt } from '@trata/ts-client-sdk';

const instance: UserModuleAttempt = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    userId,
    courseId,
    moduleId,
    attemptStatus,
    attemptScore,
    feedbackId,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
