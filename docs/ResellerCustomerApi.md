# ResellerCustomerApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCustomerOrganizationV1**](#createcustomerorganizationv1) | **POST** /v1/resellers/customers | Create Customer V1|
|[**deleteResellerCustomerV1**](#deleteresellercustomerv1) | **DELETE** /v1/resellers/customers/{customer_org_id} | Delete Customer V1|
|[**getCustomerBasicCredentialsV1**](#getcustomerbasiccredentialsv1) | **GET** /v1/resellers/customers/{customer_org_id}/basic_credentials | Get Customer Basic Credentials V1|
|[**getCustomerCredentialsV1**](#getcustomercredentialsv1) | **GET** /v1/resellers/customers/{customer_org_id}/credentials | Get Customer Credentials V1|
|[**getResellerCustomerByIdV1**](#getresellercustomerbyidv1) | **GET** /v1/resellers/customers/{customer_org_id} | Get Reseller Customer By Id V1|
|[**listResellerCustomersV1**](#listresellercustomersv1) | **GET** /v1/resellers/customers | List Reseller Customers V1|
|[**updateCustomerOrganizationV1**](#updatecustomerorganizationv1) | **PUT** /v1/resellers/customers/{customer_org_id} | Update Customer V1|

# **createCustomerOrganizationV1**
> BaseResponseInput createCustomerOrganizationV1(bodyCreateCustomerOrganizationV1)

Creates a new customer organization under a reseller organization

### Example

```typescript
import {
    ResellerCustomerApi,
    Configuration,
    BodyCreateCustomerOrganizationV1
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerApi(configuration);

let bodyCreateCustomerOrganizationV1: BodyCreateCustomerOrganizationV1; //

const { status, data } = await apiInstance.createCustomerOrganizationV1(
    bodyCreateCustomerOrganizationV1
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyCreateCustomerOrganizationV1** | **BodyCreateCustomerOrganizationV1**|  | |


### Return type

**BaseResponseInput**

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

# **deleteResellerCustomerV1**
> BaseResponseInput deleteResellerCustomerV1()

Delete a reseller\'s customer and all associated data

### Example

```typescript
import {
    ResellerCustomerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerApi(configuration);

let customerOrgId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteResellerCustomerV1(
    customerOrgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOrgId** | [**string**] |  | defaults to undefined|


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

# **getCustomerBasicCredentialsV1**
> BasicCredentials getCustomerBasicCredentialsV1()

Get the basic credentials of a customer organization under a reseller organization.

### Example

```typescript
import {
    ResellerCustomerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerApi(configuration);

let customerOrgId: string; // (default to undefined)

const { status, data } = await apiInstance.getCustomerBasicCredentialsV1(
    customerOrgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOrgId** | [**string**] |  | defaults to undefined|


### Return type

**BasicCredentials**

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

# **getCustomerCredentialsV1**
> string getCustomerCredentialsV1()

Get the customer org credentials for a customer organization under a reseller organization. NOTE: This will only return the custom token of the reseller admin user present in the customer org. Exchange this token with the id token to use it as a firebase credential in the client side.

### Example

```typescript
import {
    ResellerCustomerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerApi(configuration);

let customerOrgId: string; // (default to undefined)

const { status, data } = await apiInstance.getCustomerCredentialsV1(
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

# **getResellerCustomerByIdV1**
> OrgUsersPriceCredits getResellerCustomerByIdV1()

Get reseller customer by id

### Example

```typescript
import {
    ResellerCustomerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerApi(configuration);

let customerOrgId: string; // (default to undefined)

const { status, data } = await apiInstance.getResellerCustomerByIdV1(
    customerOrgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOrgId** | [**string**] |  | defaults to undefined|


### Return type

**OrgUsersPriceCredits**

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

# **listResellerCustomersV1**
> Array<OrgUsersPriceCredits> listResellerCustomersV1()

List reseller customers with prices, users and credits

### Example

```typescript
import {
    ResellerCustomerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerApi(configuration);

let searchQuery: string; //Search query (optional) (default to undefined)
let expandPrices: boolean; //Whether to expand the prices (optional) (default to undefined)
let expandUsers: boolean; //Whether to expand the users (optional) (default to undefined)
let expandCredits: boolean; //Whether to expand the credits (optional) (default to undefined)
let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listResellerCustomersV1(
    searchQuery,
    expandPrices,
    expandUsers,
    expandCredits,
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
| **searchQuery** | [**string**] | Search query | (optional) defaults to undefined|
| **expandPrices** | [**boolean**] | Whether to expand the prices | (optional) defaults to undefined|
| **expandUsers** | [**boolean**] | Whether to expand the users | (optional) defaults to undefined|
| **expandCredits** | [**boolean**] | Whether to expand the credits | (optional) defaults to undefined|
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

**Array<OrgUsersPriceCredits>**

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

# **updateCustomerOrganizationV1**
> OrganizationOutput updateCustomerOrganizationV1(organizationInput)

Update a customer organization under a reseller organization

### Example

```typescript
import {
    ResellerCustomerApi,
    Configuration,
    OrganizationInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerApi(configuration);

let customerOrgId: string; // (default to undefined)
let organizationInput: OrganizationInput; //

const { status, data } = await apiInstance.updateCustomerOrganizationV1(
    customerOrgId,
    organizationInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationInput** | **OrganizationInput**|  | |
| **customerOrgId** | [**string**] |  | defaults to undefined|


### Return type

**OrganizationOutput**

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

