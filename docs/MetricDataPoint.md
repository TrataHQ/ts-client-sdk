# MetricDataPoint

Simple metric data point with alias and value

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **string** | Metric alias name | [default to undefined]
**value** | **number** |  | [default to undefined]
**aggregation** | [**AggregationFormulaOutput**](AggregationFormulaOutput.md) | Aggregation function used | [default to undefined]

## Example

```typescript
import { MetricDataPoint } from '@trata/ts-client-sdk';

const instance: MetricDataPoint = {
    alias,
    value,
    aggregation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
