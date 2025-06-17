# ResellerCustomerAuditLogsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getResellerCustomerAuditLogsV1ResellersCustomersCustomerOrgIdAuditLogsGet**](#getresellercustomerauditlogsv1resellerscustomerscustomerorgidauditlogsget) | **GET** /v1/resellers/customers/{customer_org_id}/audit-logs | Get Reseller Customer Audit Logs|

# **getResellerCustomerAuditLogsV1ResellersCustomersCustomerOrgIdAuditLogsGet**
> Array<AuditLog> getResellerCustomerAuditLogsV1ResellersCustomersCustomerOrgIdAuditLogsGet()


### Example

```typescript
import {
    ResellerCustomerAuditLogsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerAuditLogsApi(configuration);

let customerOrgId: string; // (default to undefined)
let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getResellerCustomerAuditLogsV1ResellersCustomersCustomerOrgIdAuditLogsGet(
    customerOrgId,
    searchBy,
    searchValue,
    status,
    sortBy,
    sortOrder,
    skip,
    limit,
    updatedAfter,
    updatedBefore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOrgId** | [**string**] |  | defaults to undefined|
| **searchBy** | [**string**] |  | (optional) defaults to undefined|
| **searchValue** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **sortBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | **SortOrder** |  | (optional) defaults to undefined|
| **skip** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **updatedAfter** | [**string**] |  | (optional) defaults to undefined|
| **updatedBefore** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<AuditLog>**

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

