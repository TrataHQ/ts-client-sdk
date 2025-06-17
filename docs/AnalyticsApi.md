# AnalyticsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMetricsV1MetricsPost**](#getmetricsv1metricspost) | **POST** /v1/metrics | Get Metrics|
|[**getOverallStatsV1StatsGet**](#getoverallstatsv1statsget) | **GET** /v1/stats | Get Aggregated Stats|

# **getMetricsV1MetricsPost**
> BatchMetricsResponseInput getMetricsV1MetricsPost(batchMetricsRequestsInput)

Get fine grained analytics data from Trata AI like call, duration stats, etc.

### Example

```typescript
import {
    AnalyticsApi,
    Configuration,
    BatchMetricsRequestsInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let batchMetricsRequestsInput: BatchMetricsRequestsInput; //
let app: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getMetricsV1MetricsPost(
    batchMetricsRequestsInput,
    app
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchMetricsRequestsInput** | **BatchMetricsRequestsInput**|  | |
| **app** | [**string**] |  | (optional) defaults to undefined|


### Return type

**BatchMetricsResponseInput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOverallStatsV1StatsGet**
> StatsResponse getOverallStatsV1StatsGet()

Get aggregated stats from Trata AI like call count, prospect count, etc.

### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let app: AppEnumInput; // (optional) (default to undefined)

const { status, data } = await apiInstance.getOverallStatsV1StatsGet(
    app
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **app** | **AppEnumInput** |  | (optional) defaults to undefined|


### Return type

**StatsResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

