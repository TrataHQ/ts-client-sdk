# ScenarioOutput

Scenario represents a sequence of steps that can be performed by an app

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**name** | **string** | The name of the scenario | [default to undefined]
**description** | **string** | The description of the scenario | [default to undefined]
**objections** | [**Array&lt;Objection&gt;**](Objection.md) | The objections to be handled for the scenario | [default to undefined]
**callType** | **string** |  | [optional] [default to undefined]
**familiarityLevel** | **string** | The familiarity level for this scenario | [optional] [default to 'warm']
**goals** | [**Array&lt;SparrModelsScenarioGoal&gt;**](SparrModelsScenarioGoal.md) | The goals to be achieved for the scenario | [optional] [default to undefined]
**playbook** | [**Array&lt;Step&gt;**](Step.md) | The playbook to be followed for the scenario | [default to undefined]
**isInherited** | **boolean** | Whether the scenario is inherited from the parent scenario | [optional] [default to false]
**evaluatorId** | **string** |  | [optional] [default to undefined]
**status** | **string** | The status of the scenario | [optional] [default to 'active']
**id** | **string** | The unique identifier of the scenario | [optional] [default to undefined]
**version** | **number** | The version of the scenario | [optional] [default to 1]

## Example

```typescript
import { ScenarioOutput } from '@trata/ts-client-sdk';

const instance: ScenarioOutput = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    name,
    description,
    objections,
    callType,
    familiarityLevel,
    goals,
    playbook,
    isInherited,
    evaluatorId,
    status,
    id,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
