# TelephonyApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAgentPhonesV1**](#getagentphonesv1) | **GET** /v1/ai-agents/{agent_id}/phones | Get Agent Phones|
|[**linkPhoneToAgentV1**](#linkphonetoagentv1) | **POST** /v1/telephony/phones/{phone_id}/ai-agents/{agent_id}/link | Link Phone To Agent|
|[**listAvailablePhonesV1**](#listavailablephonesv1) | **GET** /v1/telephony/countries/{country_code}/available-phones | List Available Phones|
|[**listPurchasedPhonesV1**](#listpurchasedphonesv1) | **GET** /v1/telephony/phones | List Purchased Phones|
|[**listSupportedCountriesV1**](#listsupportedcountriesv1) | **GET** /v1/telephony/countries | List Supported Countries|
|[**purchasePhoneV1**](#purchasephonev1) | **POST** /v1/telephony/phones | Purchase Phone|
|[**releasePhoneV1**](#releasephonev1) | **DELETE** /v1/telephony/phones/{phone_id} | Release Phone|
|[**unlinkPhoneFromAgentV1**](#unlinkphonefromagentv1) | **DELETE** /v1/telephony/phones/{phone_id}/ai-agents/{agent_id}/link | Unlink Phone From Agent|

# **getAgentPhonesV1**
> Array<TelephoneNumber> getAgentPhonesV1()


### Example

```typescript
import {
    TelephonyApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new TelephonyApi(configuration);

let agentId: string; // (default to undefined)

const { status, data } = await apiInstance.getAgentPhonesV1(
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agentId** | [**string**] |  | defaults to undefined|


### Return type

**Array<TelephoneNumber>**

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

# **linkPhoneToAgentV1**
> BaseResponseInput linkPhoneToAgentV1()


### Example

```typescript
import {
    TelephonyApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new TelephonyApi(configuration);

let phoneId: string; // (default to undefined)
let agentId: string; // (default to undefined)

const { status, data } = await apiInstance.linkPhoneToAgentV1(
    phoneId,
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **phoneId** | [**string**] |  | defaults to undefined|
| **agentId** | [**string**] |  | defaults to undefined|


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

# **listAvailablePhonesV1**
> Array<AvailablePhoneNumber> listAvailablePhonesV1()


### Example

```typescript
import {
    TelephonyApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new TelephonyApi(configuration);

let countryCode: string; // (default to undefined)

const { status, data } = await apiInstance.listAvailablePhonesV1(
    countryCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **countryCode** | [**string**] |  | defaults to undefined|


### Return type

**Array<AvailablePhoneNumber>**

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

# **listPurchasedPhonesV1**
> Array<TelephoneNumber> listPurchasedPhonesV1()


### Example

```typescript
import {
    TelephonyApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new TelephonyApi(configuration);

let countryCode: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPurchasedPhonesV1(
    countryCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **countryCode** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<TelephoneNumber>**

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

# **listSupportedCountriesV1**
> Array<CountryInfo> listSupportedCountriesV1()


### Example

```typescript
import {
    TelephonyApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new TelephonyApi(configuration);

const { status, data } = await apiInstance.listSupportedCountriesV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CountryInfo>**

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

# **purchasePhoneV1**
> TelephoneNumber purchasePhoneV1(numberPurchaseRequest)


### Example

```typescript
import {
    TelephonyApi,
    Configuration,
    NumberPurchaseRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new TelephonyApi(configuration);

let numberPurchaseRequest: NumberPurchaseRequest; //

const { status, data } = await apiInstance.purchasePhoneV1(
    numberPurchaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **numberPurchaseRequest** | **NumberPurchaseRequest**|  | |


### Return type

**TelephoneNumber**

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

# **releasePhoneV1**
> BaseResponseInput releasePhoneV1()


### Example

```typescript
import {
    TelephonyApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new TelephonyApi(configuration);

let phoneId: string; // (default to undefined)

const { status, data } = await apiInstance.releasePhoneV1(
    phoneId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **phoneId** | [**string**] |  | defaults to undefined|


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

# **unlinkPhoneFromAgentV1**
> BaseResponseInput unlinkPhoneFromAgentV1()


### Example

```typescript
import {
    TelephonyApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new TelephonyApi(configuration);

let phoneId: string; // (default to undefined)
let agentId: string; // (default to undefined)

const { status, data } = await apiInstance.unlinkPhoneFromAgentV1(
    phoneId,
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **phoneId** | [**string**] |  | defaults to undefined|
| **agentId** | [**string**] |  | defaults to undefined|


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

