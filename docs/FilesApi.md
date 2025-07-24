# FilesApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteFileV1**](#deletefilev1) | **DELETE** /v1/files | Delete Files|
|[**uploadAudioFileV1**](#uploadaudiofilev1) | **POST** /v1/audio-files | Upload Audio Files|
|[**uploadFileV1**](#uploadfilev1) | **POST** /v1/files | Upload Files|

# **deleteFileV1**
> boolean deleteFileV1()

Delete files from Trata account

### Example

```typescript
import {
    FilesApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileIds: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFileV1(
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

# **uploadAudioFileV1**
> Array<Files> uploadAudioFileV1()

Upload audio file to Trata account to use in AI Agents

### Example

```typescript
import {
    FilesApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let files: Array<File>; // (default to undefined)
let validator: string; //Validator type to use for file validation (optional) (default to undefined)

const { status, data } = await apiInstance.uploadAudioFileV1(
    files,
    validator
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **files** | **Array&lt;File&gt;** |  | defaults to undefined|
| **validator** | [**string**] | Validator type to use for file validation | (optional) defaults to undefined|


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

# **uploadFileV1**
> Array<Files> uploadFileV1()

Upload file to Trata account to use in AI Agents

### Example

```typescript
import {
    FilesApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let files: Array<File>; // (default to undefined)
let validator: string; //Validator type to use for file validation (optional) (default to undefined)

const { status, data } = await apiInstance.uploadFileV1(
    files,
    validator
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **files** | **Array&lt;File&gt;** |  | defaults to undefined|
| **validator** | [**string**] | Validator type to use for file validation | (optional) defaults to undefined|


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

