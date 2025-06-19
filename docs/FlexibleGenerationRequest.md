# FlexibleGenerationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name for the generated evaluator | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**file_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**goals_core** | [**GoalCoreInput**](GoalCoreInput.md) |  | [optional] [default to undefined]
**tracker_core** | [**TrackerCore**](TrackerCore.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FlexibleGenerationRequest } from '@trata/ts-client-sdk';

const instance: FlexibleGenerationRequest = {
    name,
    description,
    file_ids,
    goals_core,
    tracker_core,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
