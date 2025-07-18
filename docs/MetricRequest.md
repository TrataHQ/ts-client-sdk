# MetricRequest

Simple metric request with column name, aggregation, and alias

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**SparrModelsAnalyticsMetricName**](SparrModelsAnalyticsMetricName.md) |  | [default to undefined]
**aggregation** | [**SparrModelsAnalyticsAggregationFormula**](SparrModelsAnalyticsAggregationFormula.md) |  | [default to undefined]
**alias** | **string** | Response alias name for the metric | [default to undefined]

## Example

```typescript
import { MetricRequest } from '@trata/ts-client-sdk';

const instance: MetricRequest = {
    name,
    aggregation,
    alias,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
