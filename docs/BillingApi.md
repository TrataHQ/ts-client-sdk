# BillingApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCheckoutSessionForBillableProductV1**](#createcheckoutsessionforbillableproductv1) | **POST** /v1/subscription/billable-products/{billable_product_id}/checkout | Create Checkout Session For Billable Product|
|[**getCustomerSessionSecretV1**](#getcustomersessionsecretv1) | **GET** /v1/subscription/customer-session-secret | Get Customer Session Secret|
|[**getSubscriptionBillableProductsV1**](#getsubscriptionbillableproductsv1) | **GET** /v1/subscription/billable-products | Get Subscription Billable Products|
|[**getSubscriptionPortalV1**](#getsubscriptionportalv1) | **GET** /v1/subscription/portal | Get Subscription Portal|
|[**getSubscriptionV1**](#getsubscriptionv1) | **GET** /v1/subscription | Get Subscription|

# **createCheckoutSessionForBillableProductV1**
> string createCheckoutSessionForBillableProductV1()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let billableProductId: string; // (default to undefined)

const { status, data } = await apiInstance.createCheckoutSessionForBillableProductV1(
    billableProductId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **billableProductId** | [**string**] |  | defaults to undefined|


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomerSessionSecretV1**
> string getCustomerSessionSecretV1()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

const { status, data } = await apiInstance.getCustomerSessionSecretV1();
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

# **getSubscriptionBillableProductsV1**
> Array<Price> getSubscriptionBillableProductsV1()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

const { status, data } = await apiInstance.getSubscriptionBillableProductsV1();
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

# **getSubscriptionPortalV1**
> string getSubscriptionPortalV1()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

const { status, data } = await apiInstance.getSubscriptionPortalV1();
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

# **getSubscriptionV1**
> SubscriptionInfo getSubscriptionV1()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

const { status, data } = await apiInstance.getSubscriptionV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SubscriptionInfo**

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

