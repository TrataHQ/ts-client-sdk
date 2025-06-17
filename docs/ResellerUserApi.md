# ResellerUserApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptResellerUserInviteV1**](#acceptreselleruserinvitev1) | **POST** /v1/resellers/invites/accept | Accept Invite V1|
|[**deleteResellerUserV1**](#deletereselleruserv1) | **DELETE** /v1/resellers/users/{user_id} | Delete Reseller User V1|
|[**getResellerUserByIdV1**](#getreselleruserbyidv1) | **GET** /v1/resellers/users/{user_id} | Get Reseller User By Id V1|
|[**listResellerUserInvitesV1**](#listreselleruserinvitesv1) | **GET** /v1/resellers/invites | List Reseller User Invites V1|
|[**listResellerUsersV1**](#listresellerusersv1) | **GET** /v1/resellers/users | List Reseller Users V1|
|[**sendResellerUserInviteV1**](#sendreselleruserinvitev1) | **POST** /v1/resellers/invites | Invite Users V1|
|[**updateResellerUserV1**](#updatereselleruserv1) | **PUT** /v1/resellers/users/{user_id} | Update Reseller User V1|

# **acceptResellerUserInviteV1**
> User acceptResellerUserInviteV1(acceptInviteRequest)

Accept invite and add new user to organization

### Example

```typescript
import {
    ResellerUserApi,
    Configuration,
    AcceptInviteRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerUserApi(configuration);

let acceptInviteRequest: AcceptInviteRequest; //

const { status, data } = await apiInstance.acceptResellerUserInviteV1(
    acceptInviteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptInviteRequest** | **AcceptInviteRequest**|  | |


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

# **deleteResellerUserV1**
> User deleteResellerUserV1()

Delete a user

### Example

```typescript
import {
    ResellerUserApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerUserApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteResellerUserV1(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **getResellerUserByIdV1**
> User getResellerUserByIdV1()


### Example

```typescript
import {
    ResellerUserApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerUserApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getResellerUserByIdV1(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **listResellerUserInvitesV1**
> Array<GuestOutput> listResellerUserInvitesV1()

List of all open invites from the organization

### Example

```typescript
import {
    ResellerUserApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerUserApi(configuration);

let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listResellerUserInvitesV1(
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

# **listResellerUsersV1**
> Array<User> listResellerUsersV1()

Lists all users under the user\'s organization

### Example

```typescript
import {
    ResellerUserApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerUserApi(configuration);

let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listResellerUsersV1(
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

# **sendResellerUserInviteV1**
> GuestOutput sendResellerUserInviteV1(guestInput)

Invite a new user to an organization or resend invite to the user if the user is already invited

### Example

```typescript
import {
    ResellerUserApi,
    Configuration,
    GuestInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerUserApi(configuration);

let guestInput: GuestInput; //

const { status, data } = await apiInstance.sendResellerUserInviteV1(
    guestInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guestInput** | **GuestInput**|  | |


### Return type

**GuestOutput**

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

# **updateResellerUserV1**
> User updateResellerUserV1(userPayload)

Update user details

### Example

```typescript
import {
    ResellerUserApi,
    Configuration,
    UserPayload
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerUserApi(configuration);

let userId: string; // (default to undefined)
let userPayload: UserPayload; //

const { status, data } = await apiInstance.updateResellerUserV1(
    userId,
    userPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userPayload** | **UserPayload**|  | |
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

