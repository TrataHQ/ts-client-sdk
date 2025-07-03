# ScenarioResponse

Response model for scenario including evaluator with goals

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier of the scenario | [default to undefined]
**version** | **number** | The version of the scenario | [default to undefined]
**name** | **string** | The name of the scenario | [default to undefined]
**description** | **string** | The description of the scenario | [default to undefined]
**objections** | [**Array&lt;Objection&gt;**](Objection.md) | The objections to be handled for the scenario | [default to undefined]
**callType** | [**CallType**](CallType.md) |  | [default to undefined]
**familiarityLevel** | [**FamiliarityLevel**](FamiliarityLevel.md) | The familiarity level for this scenario | [default to undefined]
**goals** | [**Array&lt;SparrModelsScenarioGoal&gt;**](SparrModelsScenarioGoal.md) | The goals to be achieved for the scenario | [default to undefined]
**playbook** | [**Array&lt;Step&gt;**](Step.md) | The playbook to be followed for the scenario | [default to undefined]
**isInherited** | **boolean** | Whether the scenario is inherited from the parent scenario | [default to undefined]
**evaluatorId** | **string** |  | [default to undefined]
**evaluator** | [**EvaluatorResponse**](EvaluatorResponse.md) |  | [optional] [default to undefined]
**status** | **string** | The status of the scenario | [default to undefined]
**orgId** | **string** | The organization ID | [default to undefined]
**createdBy** | **string** | The user who created the scenario | [default to undefined]
**createdAt** | **string** | The creation timestamp | [default to undefined]
**updatedBy** | **string** | The user who last updated the scenario | [default to undefined]
**updatedAt** | **string** | The last update timestamp | [default to undefined]

## Example

```typescript
import { ScenarioResponse } from '@trata/ts-client-sdk';

const instance: ScenarioResponse = {
    id,
    version,
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
    orgId,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
