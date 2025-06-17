# HiveApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createHiveV1**](#createhivev1) | **POST** /v1/hives | Create a New Hive|
|[**deleteHiveV1**](#deletehivev1) | **DELETE** /v1/hives/{hive_id} | Delete a Specific Hive by ID|
|[**getHiveV1**](#gethivev1) | **GET** /v1/hives/{hive_id} | Get a Specific Hive by ID|
|[**listHivesV1**](#listhivesv1) | **GET** /v1/hives | List All Hives|
|[**updateHiveV1**](#updatehivev1) | **PUT** /v1/hives/{hive_id} | Update a Specific Hive by ID|

# **createHiveV1**
> Hive createHiveV1(hiveContentInput)

Hive is a collection of documents that are used to train the Agent. Hive can be a PDF, DOCX, TXT or a website URL

### Example

```typescript
import {
    HiveApi,
    Configuration,
    HiveContentInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new HiveApi(configuration);

let hiveContentInput: HiveContentInput; //

const { status, data } = await apiInstance.createHiveV1(
    hiveContentInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hiveContentInput** | **HiveContentInput**|  | |


### Return type

**Hive**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Hive created successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteHiveV1**
> BaseResponseInput deleteHiveV1()

Delete a Specific Hive by ID

### Example

```typescript
import {
    HiveApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new HiveApi(configuration);

let hiveId: string; //ID of the hive (default to undefined)

const { status, data } = await apiInstance.deleteHiveV1(
    hiveId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hiveId** | [**string**] | ID of the hive | defaults to undefined|


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
|**200** | Hive deleted successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getHiveV1**
> Hive getHiveV1()

Get a Specific Hive by ID

### Example

```typescript
import {
    HiveApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new HiveApi(configuration);

let hiveId: string; //ID of the hive (default to undefined)

const { status, data } = await apiInstance.getHiveV1(
    hiveId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hiveId** | [**string**] | ID of the hive | defaults to undefined|


### Return type

**Hive**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Hive retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listHivesV1**
> Array<Hive> listHivesV1()

List All Hives

### Example

```typescript
import {
    HiveApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new HiveApi(configuration);

let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listHivesV1(
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

**Array<Hive>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of hives retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateHiveV1**
> Hive updateHiveV1(hiveContentOutput)

Update a Specific Hive by ID

### Example

```typescript
import {
    HiveApi,
    Configuration,
    HiveContentOutput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new HiveApi(configuration);

let hiveId: string; //ID of the hive (default to undefined)
let hiveContentOutput: HiveContentOutput; //

const { status, data } = await apiInstance.updateHiveV1(
    hiveId,
    hiveContentOutput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hiveContentOutput** | **HiveContentOutput**|  | |
| **hiveId** | [**string**] | ID of the hive | defaults to undefined|


### Return type

**Hive**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Hive updated successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

