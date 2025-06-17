# InternalApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptInviteV1**](#acceptinvitev1) | **POST** /v1/invites/accept | Acceptinvite|
|[**createOrganizationV1**](#createorganizationv1) | **POST** /v1/organizations | Createorganization|
|[**createUserV1**](#createuserv1) | **POST** /v1/users | Createuser|
|[**deleteOrganizationV1**](#deleteorganizationv1) | **DELETE** /v1/organizations | Deleteorganization|
|[**deleteUserV1**](#deleteuserv1) | **DELETE** /v1/users/{user_id} | Deleteuser|
|[**getCustomerCreditsV1**](#getcustomercreditsv1) | **GET** /v1/customers/credits | Get Customer Credits|
|[**getCustomerPricingV1**](#getcustomerpricingv1) | **GET** /v1/customers/pricing | Get Customer Pricing|
|[**getOrganizationBrandingV1**](#getorganizationbrandingv1) | **GET** /v1/organizations/branding | Getorganizationbranding|
|[**getOrganizationV1**](#getorganizationv1) | **GET** /v1/organizations | Getorganization|
|[**getUserByIdV1**](#getuserbyidv1) | **GET** /v1/users/{user_id} | Getuserbyid|
|[**listInvitesV1**](#listinvitesv1) | **GET** /v1/invites | Listinvites|
|[**listUsersV1**](#listusersv1) | **GET** /v1/users | Listusers|
|[**sendInviteV1**](#sendinvitev1) | **POST** /v1/invites | Inviteusers|
|[**updateOrganizationV1**](#updateorganizationv1) | **PUT** /v1/organizations/{org_id} | Updateorganization|
|[**updateUserV1**](#updateuserv1) | **PUT** /v1/users/{user_id} | Updateuser|

# **acceptInviteV1**
> User acceptInviteV1(acceptInviteRequest)

Accept invite and add new user to organization

### Example

```typescript
import {
    InternalApi,
    Configuration,
    AcceptInviteRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

let acceptInviteRequest: AcceptInviteRequest; //

const { status, data } = await apiInstance.acceptInviteV1(
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

# **createOrganizationV1**
> User createOrganizationV1(bodyCreateOrganizationV1)

Creates a new organization and adds the user as the \"ADMIN\" user for the org

### Example

```typescript
import {
    InternalApi,
    Configuration,
    BodyCreateOrganizationV1
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

let bodyCreateOrganizationV1: BodyCreateOrganizationV1; //

const { status, data } = await apiInstance.createOrganizationV1(
    bodyCreateOrganizationV1
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyCreateOrganizationV1** | **BodyCreateOrganizationV1**|  | |


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

# **createUserV1**
> User createUserV1(userPayload)

Create a new user

### Example

```typescript
import {
    InternalApi,
    Configuration,
    UserPayload
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

let userPayload: UserPayload; //

const { status, data } = await apiInstance.createUserV1(
    userPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userPayload** | **UserPayload**|  | |


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

# **deleteOrganizationV1**
> BaseResponseInput deleteOrganizationV1()


### Example

```typescript
import {
    InternalApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

const { status, data } = await apiInstance.deleteOrganizationV1();
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

# **deleteUserV1**
> User deleteUserV1()

Delete a user

### Example

```typescript
import {
    InternalApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteUserV1(
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

# **getCustomerCreditsV1**
> Array<Credit> getCustomerCreditsV1()

Get customer credits

### Example

```typescript
import {
    InternalApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

const { status, data } = await apiInstance.getCustomerCreditsV1();
```

### Parameters
This endpoint does not have any parameters.


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomerPricingV1**
> Array<Price> getCustomerPricingV1()

Get customer pricing

### Example

```typescript
import {
    InternalApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

const { status, data } = await apiInstance.getCustomerPricingV1();
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

# **getOrganizationBrandingV1**
> ResponseGetorganizationbrandingv1 getOrganizationBrandingV1()


### Example

```typescript
import {
    InternalApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

const { status, data } = await apiInstance.getOrganizationBrandingV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ResponseGetorganizationbrandingv1**

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

# **getOrganizationV1**
> OrganizationOutput getOrganizationV1()


### Example

```typescript
import {
    InternalApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

const { status, data } = await apiInstance.getOrganizationV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**OrganizationOutput**

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

# **getUserByIdV1**
> User getUserByIdV1()


### Example

```typescript
import {
    InternalApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserByIdV1(
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

# **listInvitesV1**
> Array<GuestOutput> listInvitesV1()

List of all open invites from the organization

### Example

```typescript
import {
    InternalApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listInvitesV1(
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

# **listUsersV1**
> Array<User> listUsersV1()

Lists all users under the user\'s organization

### Example

```typescript
import {
    InternalApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

let showResellerOwner: boolean; //Show owner users (optional) (default to false)
let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listUsersV1(
    showResellerOwner,
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
| **showResellerOwner** | [**boolean**] | Show owner users | (optional) defaults to false|
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

# **sendInviteV1**
> GuestOutput sendInviteV1(guestInput)

Invite a new user to an organization or resend invite to the user if the user is already invited

### Example

```typescript
import {
    InternalApi,
    Configuration,
    GuestInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

let guestInput: GuestInput; //
let app: 'trata' | 'sparr'; //The app to use for the invite (optional) (default to undefined)

const { status, data } = await apiInstance.sendInviteV1(
    guestInput,
    app
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guestInput** | **GuestInput**|  | |
| **app** | [**&#39;trata&#39; | &#39;sparr&#39;**]**Array<&#39;trata&#39; &#124; &#39;sparr&#39;>** | The app to use for the invite | (optional) defaults to undefined|


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

# **updateOrganizationV1**
> OrganizationOutput updateOrganizationV1(organizationInput)


### Example

```typescript
import {
    InternalApi,
    Configuration,
    OrganizationInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

let orgId: string; //ID of the organization (default to undefined)
let organizationInput: OrganizationInput; //

const { status, data } = await apiInstance.updateOrganizationV1(
    orgId,
    organizationInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationInput** | **OrganizationInput**|  | |
| **orgId** | [**string**] | ID of the organization | defaults to undefined|


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

# **updateUserV1**
> User updateUserV1(userPayload)

Update user details

### Example

```typescript
import {
    InternalApi,
    Configuration,
    UserPayload
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new InternalApi(configuration);

let userId: string; // (default to undefined)
let userPayload: UserPayload; //

const { status, data } = await apiInstance.updateUserV1(
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

