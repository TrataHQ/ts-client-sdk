# AnalyticsRequest

Simplified analytics request for single date range

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **string** | Start date for the analytics range | [default to undefined]
**endDate** | **string** | End date for the analytics range | [default to undefined]
**metrics** | [**Array&lt;MetricRequest&gt;**](MetricRequest.md) | List of metrics to retrieve | [default to undefined]
**userIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**scenarioIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsRequest } from '@trata/ts-client-sdk';

const instance: AnalyticsRequest = {
    startDate,
    endDate,
    metrics,
    userIds,
    scenarioIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
