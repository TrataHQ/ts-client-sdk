# ActionsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createActionV1**](#createactionv1) | **POST** /v1/actions | Create a New Action|
|[**deleteActionV1**](#deleteactionv1) | **DELETE** /v1/actions/{action_id} | Delete a Specific Action by ID|
|[**getActionV1**](#getactionv1) | **GET** /v1/actions/{action_id} | Get a Specific Action by ID|
|[**listActionsV1**](#listactionsv1) | **GET** /v1/actions | List All Actions|
|[**updateActionV1**](#updateactionv1) | **PUT** /v1/actions/{action_id} | Update a Specific Action by ID|

# **createActionV1**
> ActionOutput createActionV1(actionInput)

Create a New Action

### Example

```typescript
import {
    ActionsApi,
    Configuration,
    ActionInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let actionInput: ActionInput; //

const { status, data } = await apiInstance.createActionV1(
    actionInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionInput** | **ActionInput**|  | |


### Return type

**ActionOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Action created successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteActionV1**
> BaseResponseInput deleteActionV1()

Delete a Specific Action by ID

### Example

```typescript
import {
    ActionsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let actionId: string; //ID of the action (default to undefined)

const { status, data } = await apiInstance.deleteActionV1(
    actionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionId** | [**string**] | ID of the action | defaults to undefined|


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
|**200** | Action deleted successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActionV1**
> ActionOutput getActionV1()

Get a Specific Action by ID

### Example

```typescript
import {
    ActionsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let actionId: string; //ID of the action (default to undefined)

const { status, data } = await apiInstance.getActionV1(
    actionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionId** | [**string**] | ID of the action | defaults to undefined|


### Return type

**ActionOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Action retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listActionsV1**
> Array<ActionOutput> listActionsV1()

List All Actions

### Example

```typescript
import {
    ActionsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listActionsV1(
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

**Array<ActionOutput>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of actions retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateActionV1**
> ActionOutput updateActionV1(actionInput)

Update a Specific Action by ID

### Example

```typescript
import {
    ActionsApi,
    Configuration,
    ActionInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ActionsApi(configuration);

let actionId: string; //ID of the action (default to undefined)
let actionInput: ActionInput; //

const { status, data } = await apiInstance.updateActionV1(
    actionId,
    actionInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionInput** | **ActionInput**|  | |
| **actionId** | [**string**] | ID of the action | defaults to undefined|


### Return type

**ActionOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Action updated successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

