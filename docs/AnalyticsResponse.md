# AnalyticsResponse

Simplified analytics response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **string** | Start date of the analytics range | [default to undefined]
**endDate** | **string** | End date of the analytics range | [default to undefined]
**metrics** | [**Array&lt;MetricDataPoint&gt;**](MetricDataPoint.md) | List of aggregated metric values | [default to undefined]
**userIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsResponse } from '@trata/ts-client-sdk';

const instance: AnalyticsResponse = {
    startDate,
    endDate,
    metrics,
    userIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
