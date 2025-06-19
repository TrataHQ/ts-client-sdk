# GoalCoreInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the goals collection | [default to undefined]
**description** | **string** | The description of the goals collection | [default to undefined]
**process_goals** | [**Array&lt;GoalInput&gt;**](GoalInput.md) |  | [optional] [default to undefined]
**skills_goals** | [**Array&lt;GoalInput&gt;**](GoalInput.md) |  | [optional] [default to undefined]
**communication_goals** | [**Array&lt;GoalInput&gt;**](GoalInput.md) |  | [optional] [default to undefined]
**status** | **string** | The status of the goals collection | [optional] [default to 'active']

## Example

```typescript
import { GoalCoreInput } from '@trata/ts-client-sdk';

const instance: GoalCoreInput = {
    name,
    description,
    process_goals,
    skills_goals,
    communication_goals,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
