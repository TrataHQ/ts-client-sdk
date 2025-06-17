# ConversationEvaluationMetrics

Model which stores all the evaluation metrics which is used to evaluate the conversation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qualitativeMetrics** | [**Array&lt;ConversationEvaluationMetric&gt;**](ConversationEvaluationMetric.md) |  | [default to undefined]
**quantitativeMetrics** | [**Array&lt;ConversationEvaluationMetric&gt;**](ConversationEvaluationMetric.md) |  | [default to undefined]

## Example

```typescript
import { ConversationEvaluationMetrics } from '@trata/ts-client-sdk';

const instance: ConversationEvaluationMetrics = {
    qualitativeMetrics,
    quantitativeMetrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
