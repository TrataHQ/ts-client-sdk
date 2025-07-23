# SparrDbModelsFeedbackComment

FeedbackComment represents a comment on a feedback

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**feedbackId** | **string** | The ID of the feedback | [default to undefined]
**comments** | [**Array&lt;FeedbackCommentThreadOutput&gt;**](FeedbackCommentThreadOutput.md) |  | [default to undefined]
**id** | **string** | The unique identifier of the feedback comment | [optional] [default to undefined]

## Example

```typescript
import { SparrDbModelsFeedbackComment } from '@trata/ts-client-sdk';

const instance: SparrDbModelsFeedbackComment = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    feedbackId,
    comments,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
