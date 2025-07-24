# FeedbackCommentCore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedbackId** | **string** | The ID of the feedback | [default to undefined]
**comments** | [**Array&lt;FeedbackCommentThreadInput&gt;**](FeedbackCommentThreadInput.md) |  | [default to undefined]
**status** | **string** | The status of the feedback comment | [optional] [default to 'active']

## Example

```typescript
import { FeedbackCommentCore } from '@trata/ts-client-sdk';

const instance: FeedbackCommentCore = {
    feedbackId,
    comments,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
