# ResellerMetricsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getResellerMetricsV1**](#getresellermetricsv1) | **POST** /v1/resellers/metrics | Get Reseller Metrics|

# **getResellerMetricsV1**
> BatchMetricsResponseInput getResellerMetricsV1(resellerBatchMetricsRequests)

Get analytics data for Reseller

### Example

```typescript
import {
    ResellerMetricsApi,
    Configuration,
    ResellerBatchMetricsRequests
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerMetricsApi(configuration);

let resellerBatchMetricsRequests: ResellerBatchMetricsRequests; //

const { status, data } = await apiInstance.getResellerMetricsV1(
    resellerBatchMetricsRequests
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resellerBatchMetricsRequests** | **ResellerBatchMetricsRequests**|  | |


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

