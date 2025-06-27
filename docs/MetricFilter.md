# MetricFilter

Pydantic-compatible filter model for metrics requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **string** | Field name to filter on | [default to undefined]
**operator** | [**FilterOperator**](FilterOperator.md) | Filter operator | [default to undefined]
**value** | [**Value**](Value.md) |  | [default to undefined]

## Example

```typescript
import { MetricFilter } from '@trata/ts-client-sdk';

const instance: MetricFilter = {
    field,
    operator,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
