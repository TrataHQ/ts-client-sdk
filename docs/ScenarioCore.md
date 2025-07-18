# ScenarioCore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the scenario | [default to undefined]
**description** | **string** | The description of the scenario | [default to undefined]
**objections** | [**Array&lt;Objection&gt;**](Objection.md) | The objections to be handled for the scenario | [default to undefined]
**callType** | **string** |  | [optional] [default to undefined]
**goals** | [**Array&lt;GoalInput&gt;**](GoalInput.md) | The goals to be achieved for the scenario | [default to undefined]
**playbook** | [**Array&lt;Step&gt;**](Step.md) | The playbook to be followed for the scenario | [default to undefined]
**isInherited** | **boolean** | Whether the scenario is inherited from the parent scenario | [optional] [default to false]
**evaluatorId** | **string** |  | [optional] [default to undefined]
**status** | **string** | The status of the scenario | [optional] [default to 'active']

## Example

```typescript
import { ScenarioCore } from '@trata/ts-client-sdk';

const instance: ScenarioCore = {
    name,
    description,
    objections,
    callType,
    goals,
    playbook,
    isInherited,
    evaluatorId,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
