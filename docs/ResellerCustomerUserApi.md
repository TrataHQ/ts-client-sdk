# ResellerCustomerUserApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteResellerCustomerUserV1**](#deleteresellercustomeruserv1) | **DELETE** /v1/resellers/customers/{customer_org_id}/users/{user_id} | Delete Reseller Customer User V1|
|[**getResellerCustomerUserAndInvitesV1**](#getresellercustomeruserandinvitesv1) | **GET** /v1/resellers/customers/{customer_org_id}/users_and_invites | Get Reseller Customer User And Invites V1|
|[**getResellerCustomerUserByIdV1**](#getresellercustomeruserbyidv1) | **GET** /v1/resellers/customers/{customer_org_id}/users/{user_id} | Get Reseller Customer User By Id V1|
|[**listCustomerInvitesV1**](#listcustomerinvitesv1) | **GET** /v1/resellers/customers/{customer_org_id}/invites | List Customer Invites V1|
|[**listResellerCustomerUsersV1**](#listresellercustomerusersv1) | **GET** /v1/resellers/customers/{customer_org_id}/users | List Reseller Customer Users V1|
|[**revokeCustomerInviteV1**](#revokecustomerinvitev1) | **DELETE** /v1/resellers/customers/{customer_org_id}/invites/{email} | Revoke Customer Invite V1|
|[**sendCustomerUserInviteV1**](#sendcustomeruserinvitev1) | **POST** /v1/resellers/customers/{customer_org_id}/invites | Invite Customer Users V1|
|[**updateResellerCustomerUserV1**](#updateresellercustomeruserv1) | **PUT** /v1/resellers/customers/{customer_org_id}/users/{user_id} | Update Reseller Customer User V1|

# **deleteResellerCustomerUserV1**
> BaseResponseInput deleteResellerCustomerUserV1()

Delete reseller customer user

### Example

```typescript
import {
    ResellerCustomerUserApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerUserApi(configuration);

let customerOrgId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteResellerCustomerUserV1(
    customerOrgId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOrgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


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

# **getResellerCustomerUserAndInvitesV1**
> Array<User> getResellerCustomerUserAndInvitesV1()

Get resellers customer users and invites by id

### Example

```typescript
import {
    ResellerCustomerUserApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerUserApi(configuration);

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

const { status, data } = await apiInstance.getResellerCustomerUserAndInvitesV1(
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

**Array<User>**

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

# **getResellerCustomerUserByIdV1**
> User getResellerCustomerUserByIdV1()

Get resellers customer user by id

### Example

```typescript
import {
    ResellerCustomerUserApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerUserApi(configuration);

let customerOrgId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getResellerCustomerUserByIdV1(
    customerOrgId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOrgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**User**

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

# **listCustomerInvitesV1**
> Array<GuestOutput> listCustomerInvitesV1()

List all invites for a customer organization

### Example

```typescript
import {
    ResellerCustomerUserApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerUserApi(configuration);

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

const { status, data } = await apiInstance.listCustomerInvitesV1(
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

**Array<GuestOutput>**

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

# **listResellerCustomerUsersV1**
> Array<User> listResellerCustomerUsersV1()

List resellers customer users

### Example

```typescript
import {
    ResellerCustomerUserApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerUserApi(configuration);

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

const { status, data } = await apiInstance.listResellerCustomerUsersV1(
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

**Array<User>**

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

# **revokeCustomerInviteV1**
> BaseResponseInput revokeCustomerInviteV1()

Revoke an invite for a customer organization

### Example

```typescript
import {
    ResellerCustomerUserApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerUserApi(configuration);

let customerOrgId: string; // (default to undefined)
let email: string; // (default to undefined)

const { status, data } = await apiInstance.revokeCustomerInviteV1(
    customerOrgId,
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerOrgId** | [**string**] |  | defaults to undefined|
| **email** | [**string**] |  | defaults to undefined|


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

# **sendCustomerUserInviteV1**
> BaseResponseInput sendCustomerUserInviteV1(guestInput)

Send invite to a user on behalf of a customer organization

### Example

```typescript
import {
    ResellerCustomerUserApi,
    Configuration,
    GuestInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerUserApi(configuration);

let customerOrgId: string; // (default to undefined)
let guestInput: GuestInput; //

const { status, data } = await apiInstance.sendCustomerUserInviteV1(
    customerOrgId,
    guestInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guestInput** | **GuestInput**|  | |
| **customerOrgId** | [**string**] |  | defaults to undefined|


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

# **updateResellerCustomerUserV1**
> User updateResellerCustomerUserV1(updateUserRequest)

Update reseller customer user

### Example

```typescript
import {
    ResellerCustomerUserApi,
    Configuration,
    UpdateUserRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerCustomerUserApi(configuration);

let customerOrgId: string; // (default to undefined)
let userId: string; // (default to undefined)
let updateUserRequest: UpdateUserRequest; //

const { status, data } = await apiInstance.updateResellerCustomerUserV1(
    customerOrgId,
    userId,
    updateUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserRequest** | **UpdateUserRequest**|  | |
| **customerOrgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**User**

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

