# ResellerOrganizationApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createResellerOrganizationV1**](#createresellerorganizationv1) | **POST** /v1/resellers/organizations | Create Reseller Organization V1|
|[**deleteResellerOrganizationV1**](#deleteresellerorganizationv1) | **DELETE** /v1/resellers/organizations | Delete Reseller Organization V1|
|[**getResellerOrganizationV1**](#getresellerorganizationv1) | **GET** /v1/resellers/organizations | Get Reseller Organization V1|
|[**updateResellerOrganizationV1**](#updateresellerorganizationv1) | **PUT** /v1/resellers/organizations | Update Reseller Organization V1|

# **createResellerOrganizationV1**
> User createResellerOrganizationV1(bodyCreateResellerOrganizationV1)

Creates a new reseller organization and adds the created user as the \'ADMIN\' user for the org

### Example

```typescript
import {
    ResellerOrganizationApi,
    Configuration,
    BodyCreateResellerOrganizationV1
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerOrganizationApi(configuration);

let bodyCreateResellerOrganizationV1: BodyCreateResellerOrganizationV1; //

const { status, data } = await apiInstance.createResellerOrganizationV1(
    bodyCreateResellerOrganizationV1
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyCreateResellerOrganizationV1** | **BodyCreateResellerOrganizationV1**|  | |


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

# **deleteResellerOrganizationV1**
> BaseResponseInput deleteResellerOrganizationV1()

Delete a reseller organization

### Example

```typescript
import {
    ResellerOrganizationApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerOrganizationApi(configuration);

const { status, data } = await apiInstance.deleteResellerOrganizationV1();
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

# **getResellerOrganizationV1**
> OrgWithUsers getResellerOrganizationV1()

Get a reseller organization by id

### Example

```typescript
import {
    ResellerOrganizationApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerOrganizationApi(configuration);

const { status, data } = await apiInstance.getResellerOrganizationV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**OrgWithUsers**

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

# **updateResellerOrganizationV1**
> OrganizationOutput updateResellerOrganizationV1(updateResellerOrganizationRequest)

Update a reseller organization

### Example

```typescript
import {
    ResellerOrganizationApi,
    Configuration,
    UpdateResellerOrganizationRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerOrganizationApi(configuration);

let updateResellerOrganizationRequest: UpdateResellerOrganizationRequest; //

const { status, data } = await apiInstance.updateResellerOrganizationV1(
    updateResellerOrganizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateResellerOrganizationRequest** | **UpdateResellerOrganizationRequest**|  | |


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

