# ConversationOutput

Any conversation happening between the end user and assistant is stored in this table

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**prospectId** | **string** |  | [optional] [default to undefined]
**source** | **string** |  | [optional] [default to undefined]
**sourceType** | **string** |  | [optional] [default to undefined]
**aiAgentId** | **string** |  | [optional] [default to undefined]
**transcriptText** | [**Array&lt;DialogLine&gt;**](DialogLine.md) |  | [optional] [default to undefined]
**transcriptSummary** | **string** |  | [optional] [default to undefined]
**transcriptRecordingUrl** | **string** |  | [optional] [default to undefined]
**timestampStart** | **string** |  | [optional] [default to undefined]
**timestampEnd** | **string** |  | [optional] [default to undefined]
**conversationAnalytics** | [**ConversationAnalyticsModelInput**](ConversationAnalyticsModelInput.md) |  | [optional] [default to undefined]
**conversationStats** | [**ConversationStatsModel**](ConversationStatsModel.md) |  | [optional] [default to undefined]
**app** | [**AppEnumOutput**](AppEnumOutput.md) |  | [optional] [default to undefined]
**evaluation** | [**ConversationEvaluation**](ConversationEvaluation.md) |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ConversationOutput } from '@trata/ts-client-sdk';

const instance: ConversationOutput = {
    id,
    orgId,
    prospectId,
    source,
    sourceType,
    aiAgentId,
    transcriptText,
    transcriptSummary,
    transcriptRecordingUrl,
    timestampStart,
    timestampEnd,
    conversationAnalytics,
    conversationStats,
    app,
    evaluation,
    status,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
