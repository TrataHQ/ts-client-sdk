# EvaluatorCore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the evaluator | [default to undefined]
**description** | **string** | The description of the evaluator | [default to undefined]
**goals_id** | **string** |  | [optional] [default to undefined]
**playbook_id** | **string** |  | [optional] [default to undefined]
**tracker_id** | **string** |  | [optional] [default to undefined]
**generator_source** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**status** | **string** | The status of the evaluator | [optional] [default to 'active']

## Example

```typescript
import { EvaluatorCore } from '@trata/ts-client-sdk';

const instance: EvaluatorCore = {
    name,
    description,
    goals_id,
    playbook_id,
    tracker_id,
    generator_source,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
