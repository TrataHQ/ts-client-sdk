# CombinedEvaluatorResponse

Combined response model that includes evaluator and its optional components

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluator** | [**Evaluator**](Evaluator.md) | The evaluator object | [default to undefined]
**playbook** | [**Playbook**](Playbook.md) |  | [optional] [default to undefined]
**goals** | [**SparrDbModelsGoal**](SparrDbModelsGoal.md) |  | [optional] [default to undefined]
**tracker** | [**Tracker**](Tracker.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CombinedEvaluatorResponse } from '@trata/ts-client-sdk';

const instance: CombinedEvaluatorResponse = {
    evaluator,
    playbook,
    goals,
    tracker,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
