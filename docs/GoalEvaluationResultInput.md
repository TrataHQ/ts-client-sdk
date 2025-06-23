# GoalEvaluationResultInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the goal | [default to undefined]
**evaluation_result** | [**EvaluationInput**](EvaluationInput.md) |  | [optional] [default to undefined]
**score** | **number** |  | [optional] [default to undefined]
**weighted_score** | **number** |  | [optional] [default to undefined]
**weights** | **number** |  | [optional] [default to undefined]
**evidence** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { GoalEvaluationResultInput } from '@trata/ts-client-sdk';

const instance: GoalEvaluationResultInput = {
    name,
    evaluation_result,
    score,
    weighted_score,
    weights,
    evidence,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
