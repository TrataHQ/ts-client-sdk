# Module

Module represents a module that can be used in a course

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**name** | **string** | The name of the module | [default to undefined]
**description** | **string** | The description of the module | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**difficultyLevel** | **string** | The difficulty level of the module | [default to undefined]
**personaId** | **string** | The ID of the persona | [default to undefined]
**personaName** | **string** |  | [default to undefined]
**scenarioId** | **string** | The ID of the scenario | [default to undefined]
**scenarioName** | **string** |  | [default to undefined]
**passingScorePercentage** | **number** | The expected completion score of the module out of 100 | [default to undefined]
**id** | **string** | The unique identifier of the module | [optional] [default to undefined]
**courseId** | **string** | The ID of the course | [default to undefined]
**courseName** | **string** |  | [default to undefined]
**moduleOrder** | **number** | The order of the module in the course | [default to undefined]

## Example

```typescript
import { Module } from '@trata/ts-client-sdk';

const instance: Module = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    name,
    description,
    tags,
    difficultyLevel,
    personaId,
    personaName,
    scenarioId,
    scenarioName,
    passingScorePercentage,
    id,
    courseId,
    courseName,
    moduleOrder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
