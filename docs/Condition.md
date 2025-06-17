# Condition

Condition Model for branching/looping logic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**when** | **string** | Condition expression to evaluate | [default to undefined]
**stepId** | **string** | Next step ID if condition is true | [default to undefined]

## Example

```typescript
import { Condition } from '@trata/ts-client-sdk';

const instance: Condition = {
    when,
    stepId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
