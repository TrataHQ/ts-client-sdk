# MetricsRequestInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the metric request. This can be helped to co-relate the request and response | [default to undefined]
**name** | [**MetricNameInput**](MetricNameInput.md) | Name of the metric | [default to undefined]
**fromDate** | **string** | Start date to get metric request | [default to undefined]
**toDate** | **string** | End date until get metric request | [default to undefined]
**aggregationPeriod** | [**AggregationPeriod**](AggregationPeriod.md) | Aggregation period for the metric request | [default to undefined]
**aggregationFormula** | [**AggregationFormulaInput**](AggregationFormulaInput.md) | Aggregation formula for the metric request | [default to undefined]

## Example

```typescript
import { MetricsRequestInput } from '@trata/ts-client-sdk';

const instance: MetricsRequestInput = {
    id,
    name,
    fromDate,
    toDate,
    aggregationPeriod,
    aggregationFormula,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
