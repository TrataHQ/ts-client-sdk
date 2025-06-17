# ResellerCustomerDefaultPricingApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCustomerDefaultPricingV1**](#getcustomerdefaultpricingv1) | **GET** /v1/resellers/customers/pricing/default | Get Customer Default Pricing V1|
|[**updateCustomerDefaultPricingV1**](#updatecustomerdefaultpricingv1) | **PUT** /v1/resellers/customers/pricing/default/{price_id} | Update Customer Default Pricing V1|

# **getCustomerDefaultPricingV1**
> Array<Price> getCustomerDefaultPricingV1()

Get the default pricing for all customers under the reseller organization

### Example

```typescript
import {
    ResellerCustomerDefaultPricingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerDefaultPricingApi(configuration);

const { status, data } = await apiInstance.getCustomerDefaultPricingV1();
```

### Parameters
This endpoint does not have any parameters.


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCustomerDefaultPricingV1**
> Price updateCustomerDefaultPricingV1(pricingRequest)

Update customer default pricing

### Example

```typescript
import {
    ResellerCustomerDefaultPricingApi,
    Configuration,
    PricingRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerDefaultPricingApi(configuration);

let priceId: string; // (default to undefined)
let pricingRequest: PricingRequest; //

const { status, data } = await apiInstance.updateCustomerDefaultPricingV1(
    priceId,
    pricingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pricingRequest** | **PricingRequest**|  | |
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

