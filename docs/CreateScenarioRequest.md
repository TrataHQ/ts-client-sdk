# CreateScenarioRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the scenario | [default to undefined]
**description** | **string** | The description of the scenario | [default to undefined]
**objections** | [**Array&lt;Objection&gt;**](Objection.md) | The objections to be handled for the scenario | [optional] [default to undefined]
**callType** | **string** |  | [optional] [default to undefined]
**familiarityLevel** | **string** | The familiarity level for this scenario | [optional] [default to 'warm']
**goals** | [**Array&lt;GoalInput&gt;**](GoalInput.md) | The goals to be achieved for the scenario | [optional] [default to undefined]
**playbook** | [**Array&lt;Step&gt;**](Step.md) | The playbook to be followed for the scenario | [optional] [default to undefined]
**isInherited** | **boolean** | Whether the scenario is inherited from the parent scenario | [optional] [default to false]
**evaluatorId** | **string** |  | [optional] [default to undefined]
**evaluator** | [**EvaluatorRequest**](EvaluatorRequest.md) |  | [optional] [default to undefined]
**status** | **string** | The status of the scenario | [optional] [default to 'active']

## Example

```typescript
import { CreateScenarioRequest } from '@trata/ts-client-sdk';

const instance: CreateScenarioRequest = {
    name,
    description,
    objections,
    callType,
    familiarityLevel,
    goals,
    playbook,
    isInherited,
    evaluatorId,
    evaluator,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
