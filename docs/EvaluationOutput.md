# EvaluationOutput

Model which stores the result of the evaluation metric for a conversation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation_result** | **string** |  | [optional] [default to undefined]
**rubric_score** | [**RubricScore**](RubricScore.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EvaluationOutput } from '@trata/ts-client-sdk';

const instance: EvaluationOutput = {
    evaluation_result,
    rubric_score,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
