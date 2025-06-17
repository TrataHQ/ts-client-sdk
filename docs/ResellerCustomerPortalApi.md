# ResellerCustomerPortalApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCustomerPortalForResellerCustomerV1**](#createcustomerportalforresellercustomerv1) | **POST** /v1/resellers/customers/{customer_org_id}/portal | Create Customer Portal For Reseller Customer|

# **createCustomerPortalForResellerCustomerV1**
> string createCustomerPortalForResellerCustomerV1()

Create a customer portal for a reseller customer

### Example

```typescript
import {
    ResellerCustomerPortalApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerPortalApi(configuration);

let customerOrgId: string; // (default to undefined)

const { status, data } = await apiInstance.createCustomerPortalForResellerCustomerV1(
    customerOrgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOrgId** | [**string**] |  | defaults to undefined|


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

