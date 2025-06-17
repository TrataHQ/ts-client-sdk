# ResellerPricingApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addStripeAccountLinkToResellerOrgV1**](#addstripeaccountlinktoresellerorgv1) | **POST** /v1/resellers/stripe-account/link | Add Stripe Account Link To Reseller Org|
|[**createStripeAccountLinkV1**](#createstripeaccountlinkv1) | **GET** /v1/resellers/stripe-account/connect-link | Create Stripe Account Link|
|[**getStripeAccountDetailsV1**](#getstripeaccountdetailsv1) | **GET** /v1/resellers/stripe-account | Get Stripe Account Details|
|[**stripeDisconnectV1**](#stripedisconnectv1) | **DELETE** /v1/resellers/stripe-account | Revoke Stripe Connection|

# **addStripeAccountLinkToResellerOrgV1**
> BaseResponseInput addStripeAccountLinkToResellerOrgV1()

Adds a new account link to the reseller organization

### Example

```typescript
import {
    ResellerPricingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerPricingApi(configuration);

let code: string; // (default to undefined)
let state: string; // (default to undefined)

const { status, data } = await apiInstance.addStripeAccountLinkToResellerOrgV1(
    code,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|
| **state** | [**string**] |  | defaults to undefined|


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

# **createStripeAccountLinkV1**
> string createStripeAccountLinkV1()

Creates a new account link URL for the reseller

### Example

```typescript
import {
    ResellerPricingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerPricingApi(configuration);

const { status, data } = await apiInstance.createStripeAccountLinkV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

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

# **getStripeAccountDetailsV1**
> ResellerPaymentAccountDetails getStripeAccountDetailsV1()

Get stripe account details

### Example

```typescript
import {
    ResellerPricingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerPricingApi(configuration);

const { status, data } = await apiInstance.getStripeAccountDetailsV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ResellerPaymentAccountDetails**

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

# **stripeDisconnectV1**
> BaseResponseInput stripeDisconnectV1()

Disconnect reseller stripe account connection

### Example

```typescript
import {
    ResellerPricingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerPricingApi(configuration);

const { status, data } = await apiInstance.stripeDisconnectV1();
```

### Parameters
This endpoint does not have any parameters.


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

