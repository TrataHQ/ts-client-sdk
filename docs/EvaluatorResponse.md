# EvaluatorResponse

Response model for evaluator with goals

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the evaluator | [default to undefined]
**name** | **string** | The name of the evaluator | [default to undefined]
**description** | **string** | The description of the evaluator | [default to undefined]
**goals** | [**GoalCoreOutput**](GoalCoreOutput.md) |  | [optional] [default to undefined]
**goals_id** | **string** |  | [optional] [default to undefined]
**tracker_id** | **string** |  | [optional] [default to undefined]
**status** | **string** | The status of the evaluator | [default to undefined]
**orgId** | **string** | The organization ID | [default to undefined]
**createdBy** | **string** | The user who created the evaluator | [default to undefined]
**createdAt** | **string** | The creation timestamp | [default to undefined]
**updatedBy** | **string** | The user who last updated the evaluator | [default to undefined]
**updatedAt** | **string** | The last update timestamp | [default to undefined]

## Example

```typescript
import { EvaluatorResponse } from '@trata/ts-client-sdk';

const instance: EvaluatorResponse = {
    id,
    name,
    description,
    goals,
    goals_id,
    tracker_id,
    status,
    orgId,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
