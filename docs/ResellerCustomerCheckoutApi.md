# ResellerCustomerCheckoutApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCheckoutSessionForResellerCustomerV1**](#createcheckoutsessionforresellercustomerv1) | **POST** /v1/resellers/customers/{customer_org_id}/pricing/{price_id}/checkout | Create Checkout Session For Reseller Customer|

# **createCheckoutSessionForResellerCustomerV1**
> string createCheckoutSessionForResellerCustomerV1()

Create a checkout session for a reseller customer

### Example

```typescript
import {
    ResellerCustomerCheckoutApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerCheckoutApi(configuration);

let customerOrgId: string; // (default to undefined)
let priceId: string; // (default to undefined)

const { status, data } = await apiInstance.createCheckoutSessionForResellerCustomerV1(
    customerOrgId,
    priceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOrgId** | [**string**] |  | defaults to undefined|
| **priceId** | [**string**] |  | defaults to undefined|


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

