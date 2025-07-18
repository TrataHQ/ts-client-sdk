# ConnectApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**connectOauthV1**](#connectoauthv1) | **POST** /v1/sparr/connect/telephony/oauth | Telephonyoauthconnect|

# **connectOauthV1**
> TelephonyConnectResponse connectOauthV1(telephonyConnectRequest)

Connect a telephony app via OAuth and set up user sync and workflow automation.  This endpoint: 1. Creates a connection to the telephony app 2. Syncs users from the telephony app to Propel Auth 3. Creates a workflow to automatically generate feedback from call recordings

### Example

```typescript
import {
    ConnectApi,
    Configuration,
    TelephonyConnectRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ConnectApi(configuration);

let telephonyConnectRequest: TelephonyConnectRequest; //

const { status, data } = await apiInstance.connectOauthV1(
    telephonyConnectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **telephonyConnectRequest** | **TelephonyConnectRequest**|  | |


### Return type

**TelephonyConnectResponse**

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

