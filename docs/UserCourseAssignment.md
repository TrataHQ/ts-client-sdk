# UserCourseAssignment

UserCourseAssignment represents a user\'s assignment to a course

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**userId** | **string** | The ID of the user who is taking the course | [default to undefined]
**courseId** | **string** | The ID of the course | [default to undefined]
**courseName** | **string** |  | [default to undefined]
**courseCompletionStatus** | [**CourseCompletionStatus**](CourseCompletionStatus.md) |  | [default to undefined]
**courseScore** | **number** | The score of the course out of 100 | [default to undefined]
**id** | **string** | The unique identifier of the user course assignment | [optional] [default to undefined]

## Example

```typescript
import { UserCourseAssignment } from '@trata/ts-client-sdk';

const instance: UserCourseAssignment = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    userId,
    courseId,
    courseName,
    courseCompletionStatus,
    courseScore,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
