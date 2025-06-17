# UIApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listActionTemplatesV1**](#listactiontemplatesv1) | **GET** /v1/ui/action-templates | List Action Templates|
|[**listProductsDetailedV1**](#listproductsdetailedv1) | **GET** /v1/ui/products | List Products|
|[**listPromptTemplatesV1**](#listprompttemplatesv1) | **GET** /v1/ui/prompt-templates | List Prompt Templates|
|[**listRoleTemplatesV1**](#listroletemplatesv1) | **GET** /v1/ui/role-templates | List Role Templates|

# **listActionTemplatesV1**
> Array<ActionInput> listActionTemplatesV1()


### Example

```typescript
import {
    UIApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new UIApi(configuration);

let language: string; // (optional) (default to 'en')

const { status, data } = await apiInstance.listActionTemplatesV1(
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**string**] |  | (optional) defaults to 'en'|


### Return type

**Array<ActionInput>**

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

# **listProductsDetailedV1**
> Array<ProductWithAgents> listProductsDetailedV1()


### Example

```typescript
import {
    UIApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new UIApi(configuration);

let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)
let tags: string; // (optional) (default to undefined)
let productIds: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProductsDetailedV1(
    searchBy,
    searchValue,
    status,
    sortBy,
    sortOrder,
    skip,
    limit,
    updatedAfter,
    updatedBefore,
    tags,
    productIds
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
| **tags** | [**string**] |  | (optional) defaults to undefined|
| **productIds** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ProductWithAgents>**

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

# **listPromptTemplatesV1**
> { [key: string]: PromptTemplate; } listPromptTemplatesV1()


### Example

```typescript
import {
    UIApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new UIApi(configuration);

let language: string; // (optional) (default to 'en')

const { status, data } = await apiInstance.listPromptTemplatesV1(
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**string**] |  | (optional) defaults to 'en'|


### Return type

**{ [key: string]: PromptTemplate; }**

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

# **listRoleTemplatesV1**
> Array<RoleTemplate> listRoleTemplatesV1()


### Example

```typescript
import {
    UIApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new UIApi(configuration);

let language: string; // (optional) (default to 'en')

const { status, data } = await apiInstance.listRoleTemplatesV1(
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**string**] |  | (optional) defaults to 'en'|


### Return type

**Array<RoleTemplate>**

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

