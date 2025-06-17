# MetricsResponseInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the metric response. This will help co-relate the request and response | [default to undefined]
**name** | [**MetricNameInput**](MetricNameInput.md) | Name of the metric | [default to undefined]
**datapoints** | [**Array&lt;MetricResponseDataPointInput&gt;**](MetricResponseDataPointInput.md) | List of data points for the metric response | [default to undefined]

## Example

```typescript
import { MetricsResponseInput } from '@trata/ts-client-sdk';

const instance: MetricsResponseInput = {
    id,
    name,
    datapoints,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
