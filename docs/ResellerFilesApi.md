# ResellerFilesApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteResellerFilesV1**](#deleteresellerfilesv1) | **DELETE** /v1/resellers/files | Delete Files|
|[**uploadResellerFilesV1**](#uploadresellerfilesv1) | **POST** /v1/resellers/files | Upload Files|

# **deleteResellerFilesV1**
> boolean deleteResellerFilesV1()

Delete files from Trata reseller account

### Example

```typescript
import {
    ResellerFilesApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerFilesApi(configuration);

let fileIds: string; // (default to undefined)

const { status, data } = await apiInstance.deleteResellerFilesV1(
    fileIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileIds** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

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

# **uploadResellerFilesV1**
> Array<Files> uploadResellerFilesV1()

Upload file to Trata account to use in AI Agents

### Example

```typescript
import {
    ResellerFilesApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerFilesApi(configuration);

let files: Array<File>; // (default to undefined)

const { status, data } = await apiInstance.uploadResellerFilesV1(
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **files** | **Array&lt;File&gt;** |  | defaults to undefined|


### Return type

**Array<Files>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

