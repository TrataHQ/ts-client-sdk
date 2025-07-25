# SparrModelsAnalyticsMetricsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the metric request. This can be helped to co-relate the request and response | [default to undefined]
**name** | [**SparrModelsAnalyticsMetricName**](SparrModelsAnalyticsMetricName.md) |  | [default to undefined]
**fromDate** | **string** | Start date to get metric request | [default to undefined]
**toDate** | **string** | End date until get metric request | [default to undefined]
**aggregationPeriod** | [**AggregationPeriod**](AggregationPeriod.md) |  | [default to undefined]
**aggregationFormula** | [**SparrModelsAnalyticsAggregationFormula**](SparrModelsAnalyticsAggregationFormula.md) |  | [default to undefined]
**filter** | [**Array&lt;MetricFilter&gt;**](MetricFilter.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SparrModelsAnalyticsMetricsRequest } from '@trata/ts-client-sdk';

const instance: SparrModelsAnalyticsMetricsRequest = {
    id,
    name,
    fromDate,
    toDate,
    aggregationPeriod,
    aggregationFormula,
    filter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
