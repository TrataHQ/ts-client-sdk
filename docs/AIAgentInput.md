# AIAgentInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the AI agent | [default to undefined]
**imageUrl** | **string** | Image URL for the AI agent | [default to undefined]
**mission** | [**Mission**](Mission.md) |  | [optional] [default to undefined]
**status** | [**Status**](Status.md) |  | [default to undefined]
**role** | **string** | Role of the AI agent in the company | [default to undefined]
**roleDescription** | **string** | Description of the role of the AI agent | [default to undefined]
**timezone** | **string** | Timezone of the AI agent used for scheduling meetings | [default to undefined]
**voice** | [**VoiceInput**](VoiceInput.md) |  | [optional] [default to undefined]
**boostedKeywords** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**app** | [**AppEnumInput**](AppEnumInput.md) |  | [optional] [default to undefined]
**evaluationMetrics** | [**ConversationEvaluationMetrics**](ConversationEvaluationMetrics.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AIAgentInput } from '@trata/ts-client-sdk';

const instance: AIAgentInput = {
    name,
    imageUrl,
    mission,
    status,
    role,
    roleDescription,
    timezone,
    voice,
    boostedKeywords,
    app,
    evaluationMetrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
