# ResellerSettingsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addResellerSettingsV1**](#addresellersettingsv1) | **POST** /v1/resellers/settings | Organization Settings V1|
|[**getOrganizationSettingsV1**](#getorganizationsettingsv1) | **GET** /v1/resellers/settings | Get Organization Settings V1|
|[**updateResellerSettingsV1**](#updateresellersettingsv1) | **PUT** /v1/resellers/settings | Organization Settings Update V1|

# **addResellerSettingsV1**
> OrganizationSettings addResellerSettingsV1(organizationSettings)

Add Reseller settings

### Example

```typescript
import {
    ResellerSettingsApi,
    Configuration,
    OrganizationSettings
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerSettingsApi(configuration);

let organizationSettings: OrganizationSettings; //

const { status, data } = await apiInstance.addResellerSettingsV1(
    organizationSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationSettings** | **OrganizationSettings**|  | |


### Return type

**OrganizationSettings**

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

# **getOrganizationSettingsV1**
> OrganizationSettings getOrganizationSettingsV1()

Get organization settings

### Example

```typescript
import {
    ResellerSettingsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerSettingsApi(configuration);

const { status, data } = await apiInstance.getOrganizationSettingsV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**OrganizationSettings**

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

# **updateResellerSettingsV1**
> OrganizationSettings updateResellerSettingsV1(organizationSettings)

Update organization settings

### Example

```typescript
import {
    ResellerSettingsApi,
    Configuration,
    OrganizationSettings
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ResellerSettingsApi(configuration);

let organizationSettings: OrganizationSettings; //

const { status, data } = await apiInstance.updateResellerSettingsV1(
    organizationSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationSettings** | **OrganizationSettings**|  | |


### Return type

**OrganizationSettings**

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

