# AnalyticsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMetricsV1MetricsPost**](#getmetricsv1metricspost) | **POST** /v1/metrics | Get Metrics|
|[**getOverallStatsV1StatsGet**](#getoverallstatsv1statsget) | **GET** /v1/stats | Get Aggregated Stats|
|[**getUserAnalyticsV1**](#getuseranalyticsv1) | **POST** /v1/sparr/analytics/users | Get User Analytics|
|[**getUserPerformanceSummaryV1**](#getuserperformancesummaryv1) | **POST** /v1/sparr/analytics/users/performance-summary | Get User Performance Summary|

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

# **getUserAnalyticsV1**
> AnalyticsResponse getUserAnalyticsV1(analyticsRequest)

Get simplified user analytics with custom metrics and single date range aggregation.  This endpoint aggregates metrics over the entire date range without time-based grouping. Perfect for getting summary statistics or single aggregated values.  Example request: ```json {     \"startDate\": \"2024-01-01\",     \"endDate\": \"2024-03-31\",     \"metrics\": [         {             \"name\": \"overallScore\",             \"aggregation\": \"AVG\",             \"alias\": \"average_performance\"         },         {             \"name\": \"callDuration\",             \"aggregation\": \"SUM\",             \"alias\": \"total_call_time\"         },         {             \"name\": \"modulesCompleted\",             \"aggregation\": \"COUNT\",             \"alias\": \"completion_count\"         }     ],     \"userIds\": [\"user_id_1\", \"user_id_2\"] } ```  Available metric names: - processAdherenceScore: Process adherence score metric - skillsScore: Skills assessment score metric - communicationScore: Communication effectiveness score metric - userTalkingRatio: Ratio of user talking time vs total conversation time - fillerWords: Count of filler words used - overallScore: Overall performance score metric - modulesCompleted: Number of modules completed - callDuration: Duration of the call in seconds - longestMonologue: Duration of the longest monologue in seconds - userId: User ID for counting unique users - feedbackId: Feedback ID for counting records  Note: Both camelCase and snake_case formats are supported for column names (e.g., \"processAdherenceScore\" or \"process_adherence_score\")  Available aggregations: - SUM: Total values - AVG: Average values - COUNT: Count of non-null values - MIN: Minimum value - MAX: Maximum value

### Example

```typescript
import {
    AnalyticsApi,
    Configuration,
    AnalyticsRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let analyticsRequest: AnalyticsRequest; //

const { status, data } = await apiInstance.getUserAnalyticsV1(
    analyticsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsRequest** | **AnalyticsRequest**|  | |


### Return type

**AnalyticsResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserPerformanceSummaryV1**
> UserPerformanceSummaryResponse getUserPerformanceSummaryV1(userPerformanceSummaryRequest)

Get user performance summary with aggregated metrics grouped by user.  This endpoint returns a list of users with their average performance scores: - Average Process Adherence Score - Average Skills Score - Average Communication Score - Average Overall Score - Total number of sessions  Features: - Date range filtering (startDate, endDate) - Optional user ID filtering - Sorting by any column (userName, avgProcessAdherenceScore, avgSkillsScore, avgCommunicationScore, avgOverallScore) - Sort order (asc/desc, default desc) - Pagination support (skip/limit)  Example request: ```json {     \"startDate\": \"2024-01-01\",     \"endDate\": \"2024-03-31\",     \"userIds\": [\"user_id_1\", \"user_id_2\"],     \"sortBy\": \"avgOverallScore\",     \"sortOrder\": \"desc\",     \"skip\": 0,     \"limit\": 50 } ```  Available sort columns: - userName: User name - avgProcessAdherenceScore: Average process adherence score - avgSkillsScore: Average skills assessment score - avgCommunicationScore: Average communication effectiveness score - avgOverallScore: Average overall performance score (default)  Returns: - List of user performance summaries - Total count of matching users - Pagination metadata

### Example

```typescript
import {
    AnalyticsApi,
    Configuration,
    UserPerformanceSummaryRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let userPerformanceSummaryRequest: UserPerformanceSummaryRequest; //

const { status, data } = await apiInstance.getUserPerformanceSummaryV1(
    userPerformanceSummaryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userPerformanceSummaryRequest** | **UserPerformanceSummaryRequest**|  | |


### Return type

**UserPerformanceSummaryResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

