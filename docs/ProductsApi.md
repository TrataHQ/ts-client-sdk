# ProductsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProductV1**](#createproductv1) | **POST** /v1/products | Create a New Product|
|[**deleteProductV1**](#deleteproductv1) | **DELETE** /v1/products/{product_id} | Delete a Specific Product by ID|
|[**getProductV1**](#getproductv1) | **GET** /v1/products/{product_id} | Get a Specific Product by ID|
|[**listAgentsOfProductV1**](#listagentsofproductv1) | **GET** /v1/products/{product_id}/agents | List All Agents Linked to a Specific Product|
|[**listProductsV1**](#listproductsv1) | **GET** /v1/products | List All Products|
|[**updateProductV1**](#updateproductv1) | **PUT** /v1/products/{product_id} | Update a Specific Product by ID|

# **createProductV1**
> ProductOutput createProductV1(productInput)

Create a New Product

### Example

```typescript
import {
    ProductsApi,
    Configuration,
    ProductInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productInput: ProductInput; //

const { status, data } = await apiInstance.createProductV1(
    productInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productInput** | **ProductInput**|  | |


### Return type

**ProductOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Product created successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProductV1**
> BaseResponseInput deleteProductV1()

Delete a Specific Product by ID

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: string; //ID of the product (default to undefined)

const { status, data } = await apiInstance.deleteProductV1(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | ID of the product | defaults to undefined|


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
|**200** | Product deleted successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProductV1**
> ProductOutput getProductV1()

Get a Specific Product by ID

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: string; //ID of the product (default to undefined)

const { status, data } = await apiInstance.getProductV1(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | ID of the product | defaults to undefined|


### Return type

**ProductOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Product retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAgentsOfProductV1**
> Array<AIAgentOutput> listAgentsOfProductV1()

List All Agents Linked to a Specific Product

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: string; //ID of the product (default to undefined)

const { status, data } = await apiInstance.listAgentsOfProductV1(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | ID of the product | defaults to undefined|


### Return type

**Array<AIAgentOutput>**

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

# **listProductsV1**
> Array<ProductOutput> listProductsV1()

List All Products

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

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

const { status, data } = await apiInstance.listProductsV1(
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

**Array<ProductOutput>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of products retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProductV1**
> ProductOutput updateProductV1(productInput)

Update a Specific Product by ID

### Example

```typescript
import {
    ProductsApi,
    Configuration,
    ProductInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: string; //ID of the product (default to undefined)
let productInput: ProductInput; //

const { status, data } = await apiInstance.updateProductV1(
    productId,
    productInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productInput** | **ProductInput**|  | |
| **productId** | [**string**] | ID of the product | defaults to undefined|


### Return type

**ProductOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Product updated successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

