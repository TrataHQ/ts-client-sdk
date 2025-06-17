# ConversationEvaluation

Model which stores the evaluation metrics for the conversation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aiEvaluationSummary** | **string** |  | [default to undefined]
**aiEvaluations** | [**Array&lt;ConversationEvaluationData&gt;**](ConversationEvaluationData.md) |  | [default to undefined]
**aiWhatWentWell** | [**Aiwhatwentwell**](Aiwhatwentwell.md) |  | [default to undefined]
**aiWhatCanBeImproved** | [**Aiwhatcanbeimproved**](Aiwhatcanbeimproved.md) |  | [default to undefined]
**humanEvaluationSummary** | **string** |  | [default to undefined]
**humanEvaluations** | [**Array&lt;ConversationEvaluationData&gt;**](ConversationEvaluationData.md) |  | [default to undefined]
**humanWhatWentWell** | [**Humanwhatwentwell**](Humanwhatwentwell.md) |  | [default to undefined]
**humanWhatCanBeImproved** | [**Humanwhatcanbeimproved**](Humanwhatcanbeimproved.md) |  | [default to undefined]

## Example

```typescript
import { ConversationEvaluation } from '@trata/ts-client-sdk';

const instance: ConversationEvaluation = {
    aiEvaluationSummary,
    aiEvaluations,
    aiWhatWentWell,
    aiWhatCanBeImproved,
    humanEvaluationSummary,
    humanEvaluations,
    humanWhatWentWell,
    humanWhatCanBeImproved,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
