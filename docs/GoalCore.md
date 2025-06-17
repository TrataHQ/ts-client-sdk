# GoalCore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the goals collection | [default to undefined]
**description** | **string** | The description of the goals collection | [default to undefined]
**goals** | [**Array&lt;GoalInput&gt;**](GoalInput.md) | The list of goals | [default to undefined]
**status** | **string** | The status of the goals collection | [optional] [default to 'active']

## Example

```typescript
import { GoalCore } from '@trata/ts-client-sdk';

const instance: GoalCore = {
    name,
    description,
    goals,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
