# Course

Course represents a course that can be used in a scenario

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**name** | **string** | The name of the course | [default to undefined]
**photoUrl** | **string** |  | [optional] [default to undefined]
**description** | **string** | The description of the course | [default to undefined]
**status** | **string** | The status of the course | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**id** | **string** | The unique identifier of the course | [optional] [default to undefined]

## Example

```typescript
import { Course } from '@trata/ts-client-sdk';

const instance: Course = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    name,
    photoUrl,
    description,
    status,
    tags,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
