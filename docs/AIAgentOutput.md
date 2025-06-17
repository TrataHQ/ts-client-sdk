# AIAgentOutput

AI agent configured by businesses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**mission** | [**Mission**](Mission.md) |  | [optional] [default to undefined]
**role** | **string** |  | [optional] [default to undefined]
**roleDescription** | **string** |  | [optional] [default to undefined]
**transcriber** | [**Transcriber**](Transcriber.md) |  | [optional] [default to undefined]
**intelligenceProvider** | [**IntelligenceProvider**](IntelligenceProvider.md) |  | [optional] [default to undefined]
**voice** | [**VoiceOutput**](VoiceOutput.md) |  | [optional] [default to undefined]
**boostedKeywords** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**app** | [**AppEnumOutput**](AppEnumOutput.md) |  | [optional] [default to undefined]
**evaluationMetrics** | [**ConversationEvaluationMetrics**](ConversationEvaluationMetrics.md) |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**timezone** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AIAgentOutput } from '@trata/ts-client-sdk';

const instance: AIAgentOutput = {
    id,
    orgId,
    name,
    imageUrl,
    mission,
    role,
    roleDescription,
    transcriber,
    intelligenceProvider,
    voice,
    boostedKeywords,
    app,
    evaluationMetrics,
    status,
    timezone,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
