# ConversationInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **string** | Source from where the conversation originated. This can be device id, phone number, etc. | [default to undefined]
**sourceType** | [**ConversationSourceType**](ConversationSourceType.md) |  | [default to undefined]
**agentId** | **string** | AI agent which handled the conversation | [default to undefined]
**app** | [**AppEnumInput**](AppEnumInput.md) |  | [optional] [default to undefined]
**transcriptText** | [**Array&lt;DialogLine&gt;**](DialogLine.md) |  | [optional] [default to undefined]
**transcriptSummary** | **string** |  | [optional] [default to undefined]
**transcriptRecordingUrl** | **string** |  | [optional] [default to undefined]
**timestampStart** | **string** | Start time of the conversation | [default to undefined]
**timestampEnd** | **string** |  | [optional] [default to undefined]
**conversationAnalytics** | [**ConversationAnalyticsModelInput**](ConversationAnalyticsModelInput.md) |  | [optional] [default to undefined]
**adminComments** | [**Array&lt;Comment&gt;**](Comment.md) |  | [optional] [default to undefined]
**conversationStats** | [**ConversationStatsModel**](ConversationStatsModel.md) |  | [optional] [default to undefined]
**evaluation** | [**ConversationEvaluation**](ConversationEvaluation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ConversationInput } from '@trata/ts-client-sdk';

const instance: ConversationInput = {
    source,
    sourceType,
    agentId,
    app,
    transcriptText,
    transcriptSummary,
    transcriptRecordingUrl,
    timestampStart,
    timestampEnd,
    conversationAnalytics,
    adminComments,
    conversationStats,
    evaluation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
