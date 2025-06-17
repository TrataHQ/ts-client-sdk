# UserModuleAttemptResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | The ID of the user who is taking the module | [default to undefined]
**courseId** | **string** | The ID of the course | [default to undefined]
**moduleId** | **string** | The ID of the module | [default to undefined]
**attemptStatus** | [**ModuleAttemptStatus**](ModuleAttemptStatus.md) | The completion status of the module | [default to undefined]
**attemptScore** | **number** | The score of the module out of 100 | [default to undefined]
**id** | **string** | The ID of the user module attempt | [default to undefined]
**feedbackId** | **string** | The ID of the feedback | [default to undefined]
**moduleName** | **string** |  | [default to undefined]
**passingScorePercentage** | **number** | The passing score percentage of the module | [default to undefined]
**difficultyLevel** | **string** | The difficulty level of the module | [default to undefined]
**personaName** | **string** |  | [default to undefined]
**scenarioName** | **string** |  | [default to undefined]
**createdAt** | **string** | The date and time the module was created | [default to undefined]
**createdBy** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**updatedBy** | **string** |  | [default to undefined]

## Example

```typescript
import { UserModuleAttemptResponse } from '@trata/ts-client-sdk';

const instance: UserModuleAttemptResponse = {
    userId,
    courseId,
    moduleId,
    attemptStatus,
    attemptScore,
    id,
    feedbackId,
    moduleName,
    passingScorePercentage,
    difficultyLevel,
    personaName,
    scenarioName,
    createdAt,
    createdBy,
    updatedAt,
    updatedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
