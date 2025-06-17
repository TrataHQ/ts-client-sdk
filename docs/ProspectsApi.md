# ProspectsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProspectV1**](#createprospectv1) | **POST** /v1/prospects | Create a New Prospect|
|[**deleteProspectV1**](#deleteprospectv1) | **DELETE** /v1/prospects/{prospect_id} | Delete a Specific Prospect by ID|
|[**getProspectV1**](#getprospectv1) | **GET** /v1/prospects/{prospect_id} | Get a Specific Prospect by ID|
|[**listProspectsV1**](#listprospectsv1) | **GET** /v1/prospects | List All Prospects|
|[**updateProspectV1**](#updateprospectv1) | **PUT** /v1/prospects/{prospect_id} | Update a Specific Prospect by ID|

# **createProspectV1**
> ProspectOutput createProspectV1(prospectInput)

Create a New Prospect

### Example

```typescript
import {
    ProspectsApi,
    Configuration,
    ProspectInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ProspectsApi(configuration);

let prospectInput: ProspectInput; //

const { status, data } = await apiInstance.createProspectV1(
    prospectInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prospectInput** | **ProspectInput**|  | |


### Return type

**ProspectOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Prospect created successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProspectV1**
> BaseResponseInput deleteProspectV1()

Delete a Specific Prospect by ID

### Example

```typescript
import {
    ProspectsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ProspectsApi(configuration);

let prospectId: string; //ID of the prospect (default to undefined)

const { status, data } = await apiInstance.deleteProspectV1(
    prospectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prospectId** | [**string**] | ID of the prospect | defaults to undefined|


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
|**200** | Prospect deleted successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProspectV1**
> ProspectOutput getProspectV1()

Get a Specific Prospect by ID

### Example

```typescript
import {
    ProspectsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ProspectsApi(configuration);

let prospectId: string; //ID of the prospect (default to undefined)

const { status, data } = await apiInstance.getProspectV1(
    prospectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prospectId** | [**string**] | ID of the prospect | defaults to undefined|


### Return type

**ProspectOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Prospect retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProspectsV1**
> Array<ProspectOutput> listProspectsV1()

List All Prospects

### Example

```typescript
import {
    ProspectsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ProspectsApi(configuration);

let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProspectsV1(
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

**Array<ProspectOutput>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of prospects retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProspectV1**
> ProspectOutput updateProspectV1(prospectInput)

Update a Specific Prospect by ID

### Example

```typescript
import {
    ProspectsApi,
    Configuration,
    ProspectInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ProspectsApi(configuration);

let prospectId: string; //ID of the prospect (default to undefined)
let prospectInput: ProspectInput; //

const { status, data } = await apiInstance.updateProspectV1(
    prospectId,
    prospectInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prospectInput** | **ProspectInput**|  | |
| **prospectId** | [**string**] | ID of the prospect | defaults to undefined|


### Return type

**ProspectOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Prospect updated successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

