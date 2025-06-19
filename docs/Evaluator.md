# Evaluator


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**name** | **string** | The name of the evaluator | [default to undefined]
**description** | **string** | The description of the evaluator | [default to undefined]
**goals_id** | **string** |  | [optional] [default to undefined]
**tracker_id** | **string** |  | [optional] [default to undefined]
**generator_source** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**status** | **string** | The status of the evaluator | [optional] [default to 'active']
**id** | **string** | The unique identifier of the evaluator | [optional] [default to undefined]

## Example

```typescript
import { Evaluator } from '@trata/ts-client-sdk';

const instance: Evaluator = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    name,
    description,
    goals_id,
    tracker_id,
    generator_source,
    status,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
