# AgentsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAIAgentV1**](#createaiagentv1) | **POST** /v1/ai-agents | Create a New AI Agent|
|[**deleteAIAgentV1**](#deleteaiagentv1) | **DELETE** /v1/ai-agents/{agent_id} | Delete a Specific AI Agent by ID|
|[**getAIAgentV1**](#getaiagentv1) | **GET** /v1/ai-agents/{agent_id} | Get a Specific AI Agent by ID|
|[**listAIAgentsV1**](#listaiagentsv1) | **GET** /v1/ai-agents | List All AI Agents|
|[**updateAIAgentV1**](#updateaiagentv1) | **PUT** /v1/ai-agents/{agent_id} | Update a Specific AI Agent by ID|

# **createAIAgentV1**
> AIAgentOutput createAIAgentV1(aIAgentInput)

Create a New AI Agent

### Example

```typescript
import {
    AgentsApi,
    Configuration,
    AIAgentInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new AgentsApi(configuration);

let aIAgentInput: AIAgentInput; //

const { status, data } = await apiInstance.createAIAgentV1(
    aIAgentInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aIAgentInput** | **AIAgentInput**|  | |


### Return type

**AIAgentOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI Agent created successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAIAgentV1**
> BaseResponseInput deleteAIAgentV1()

Delete a Specific AI Agent by ID

### Example

```typescript
import {
    AgentsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new AgentsApi(configuration);

let agentId: string; //ID of the agent (default to undefined)

const { status, data } = await apiInstance.deleteAIAgentV1(
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agentId** | [**string**] | ID of the agent | defaults to undefined|


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
|**200** | AI Agent deleted successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAIAgentV1**
> AIAgentOutput getAIAgentV1()

Get a Specific AI Agent by ID

### Example

```typescript
import {
    AgentsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new AgentsApi(configuration);

let agentId: string; //ID of the agent (default to undefined)

const { status, data } = await apiInstance.getAIAgentV1(
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agentId** | [**string**] | ID of the agent | defaults to undefined|


### Return type

**AIAgentOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI Agent retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAIAgentsV1**
> Array<AIAgentOutput> listAIAgentsV1()

List All AI Agents

### Example

```typescript
import {
    AgentsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new AgentsApi(configuration);

let app: AppEnumInput; // (optional) (default to undefined)
let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listAIAgentsV1(
    app,
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
| **app** | **AppEnumInput** |  | (optional) defaults to undefined|
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

**Array<AIAgentOutput>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of AI Agents retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAIAgentV1**
> AIAgentOutput updateAIAgentV1(aIAgentInput)

Update a Specific AI Agent by ID

### Example

```typescript
import {
    AgentsApi,
    Configuration,
    AIAgentInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new AgentsApi(configuration);

let agentId: string; //ID of the agent (default to undefined)
let aIAgentInput: AIAgentInput; //

const { status, data } = await apiInstance.updateAIAgentV1(
    agentId,
    aIAgentInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aIAgentInput** | **AIAgentInput**|  | |
| **agentId** | [**string**] | ID of the agent | defaults to undefined|


### Return type

**AIAgentOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI Agent updated successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

