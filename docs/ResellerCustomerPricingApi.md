# ResellerCustomerPricingApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCustomerPricingV1**](#createcustomerpricingv1) | **POST** /v1/resellers/customers/{customer_org_id}/pricing | Create Customer Pricing V1|
|[**getResellerCustomerCreditsV1**](#getresellercustomercreditsv1) | **GET** /v1/resellers/customers/{customer_org_id}/credits | Get Reseller Customer Credits V1|
|[**getResellerCustomerPricingV1**](#getresellercustomerpricingv1) | **GET** /v1/resellers/customers/{customer_org_id}/pricing | Get Reseller Customer Pricing V1|
|[**updateCustomerPricingV1**](#updatecustomerpricingv1) | **PUT** /v1/resellers/customers/{customer_org_id}/pricing/{price_id} | Update Customer Pricing V1|

# **createCustomerPricingV1**
> Price createCustomerPricingV1(pricingRequest)

Override pricing for customer

### Example

```typescript
import {
    ResellerCustomerPricingApi,
    Configuration,
    PricingRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerPricingApi(configuration);

let customerOrgId: string; // (default to undefined)
let pricingRequest: PricingRequest; //

const { status, data } = await apiInstance.createCustomerPricingV1(
    customerOrgId,
    pricingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pricingRequest** | **PricingRequest**|  | |
| **customerOrgId** | [**string**] |  | defaults to undefined|


### Return type

**Price**

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

# **getResellerCustomerCreditsV1**
> Array<Credit> getResellerCustomerCreditsV1()

Get resellers customer credits

### Example

```typescript
import {
    ResellerCustomerPricingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerPricingApi(configuration);

let customerOrgId: string; // (default to undefined)

const { status, data } = await apiInstance.getResellerCustomerCreditsV1(
    customerOrgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOrgId** | [**string**] |  | defaults to undefined|


### Return type

**Array<Credit>**

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

# **getResellerCustomerPricingV1**
> Array<Price> getResellerCustomerPricingV1()

Get resellers customer pricing

### Example

```typescript
import {
    ResellerCustomerPricingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerPricingApi(configuration);

let customerOrgId: string; // (default to undefined)

const { status, data } = await apiInstance.getResellerCustomerPricingV1(
    customerOrgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOrgId** | [**string**] |  | defaults to undefined|


### Return type

**Array<Price>**

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

# **updateCustomerPricingV1**
> Price updateCustomerPricingV1(pricingRequest)

Update customer pricing

### Example

```typescript
import {
    ResellerCustomerPricingApi,
    Configuration,
    PricingRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerPricingApi(configuration);

let customerOrgId: string; // (default to undefined)
let priceId: string; // (default to undefined)
let pricingRequest: PricingRequest; //

const { status, data } = await apiInstance.updateCustomerPricingV1(
    customerOrgId,
    priceId,
    pricingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pricingRequest** | **PricingRequest**|  | |
| **customerOrgId** | [**string**] |  | defaults to undefined|
| **priceId** | [**string**] |  | defaults to undefined|


### Return type

**Price**

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

