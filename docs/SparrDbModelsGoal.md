# SparrDbModelsGoal

Goal represents a collection of goals with weightages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**name** | **string** | The name of the goals collection | [default to undefined]
**description** | **string** | The description of the goals collection | [default to undefined]
**goals** | [**Array&lt;SparrModelsScenarioGoal&gt;**](SparrModelsScenarioGoal.md) | The list of goals | [default to undefined]
**status** | **string** | The status of the goals collection | [optional] [default to 'active']
**id** | **string** | The unique identifier of the goals collection | [optional] [default to undefined]

## Example

```typescript
import { SparrDbModelsGoal } from '@trata/ts-client-sdk';

const instance: SparrDbModelsGoal = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    name,
    description,
    goals,
    status,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
