# RubricScore

Detailed rubric-based scoring for precision and consistency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | [**RubricLevel**](RubricLevel.md) | The rubric level that best describes the performance | [default to undefined]
**confidence** | **number** | Confidence in the rubric level assessment (0.0 &#x3D; low confidence, 1.0 &#x3D; high confidence) | [optional] [default to 1.0]
**fine_tune** | **number** | Fine-tuning adjustment within the rubric level (-0.5 to +0.5) | [optional] [default to 0.0]
**evidence** | **Array&lt;string&gt;** | Specific examples from the conversation that support this assessment | [optional] [default to undefined]

## Example

```typescript
import { RubricScore } from '@trata/ts-client-sdk';

const instance: RubricScore = {
    level,
    confidence,
    fine_tune,
    evidence,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
