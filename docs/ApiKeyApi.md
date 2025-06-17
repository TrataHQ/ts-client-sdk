# ApiKeyApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createApiKeyV1**](#createapikeyv1) | **POST** /v1/api-keys | Create Api Key|
|[**deleteApiKeyV1**](#deleteapikeyv1) | **DELETE** /v1/api-keys/{key_id} | Delete Api Key|
|[**getCallKeyV1**](#getcallkeyv1) | **GET** /v1/api-keys/call-key | Get Call Key|
|[**listApiKeysV1**](#listapikeysv1) | **GET** /v1/api-keys | List Api Keys|

# **createApiKeyV1**
> UserApiKeyLink createApiKeyV1(apiKeyRequest)


### Example

```typescript
import {
    ApiKeyApi,
    Configuration,
    ApiKeyRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ApiKeyApi(configuration);

let apiKeyRequest: ApiKeyRequest; //

const { status, data } = await apiInstance.createApiKeyV1(
    apiKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKeyRequest** | **ApiKeyRequest**|  | |


### Return type

**UserApiKeyLink**

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

# **deleteApiKeyV1**
> BaseResponseInput deleteApiKeyV1()


### Example

```typescript
import {
    ApiKeyApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ApiKeyApi(configuration);

let keyId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteApiKeyV1(
    keyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keyId** | [**string**] |  | defaults to undefined|


### Return type

**BaseResponseInput**

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

# **getCallKeyV1**
> UserApiKeyLink getCallKeyV1()


### Example

```typescript
import {
    ApiKeyApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ApiKeyApi(configuration);

const { status, data } = await apiInstance.getCallKeyV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserApiKeyLink**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listApiKeysV1**
> Array<UserApiKeyLink> listApiKeysV1()


### Example

```typescript
import {
    ApiKeyApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ApiKeyApi(configuration);

const { status, data } = await apiInstance.listApiKeysV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<UserApiKeyLink>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

