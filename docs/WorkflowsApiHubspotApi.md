# WorkflowsApiHubspotApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**handleHubspotWebhookV1WorkflowsApiHubspotWebhookPost**](#handlehubspotwebhookv1workflowsapihubspotwebhookpost) | **POST** /v1/workflows/api/hubspot/webhook | Handle Hubspot Webhook|

# **handleHubspotWebhookV1WorkflowsApiHubspotWebhookPost**
> AgenticWorkflowModelsBaseBaseResponse handleHubspotWebhookV1WorkflowsApiHubspotWebhookPost()


### Example

```typescript
import {
    WorkflowsApiHubspotApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new WorkflowsApiHubspotApi(configuration);

const { status, data } = await apiInstance.handleHubspotWebhookV1WorkflowsApiHubspotWebhookPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AgenticWorkflowModelsBaseBaseResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

