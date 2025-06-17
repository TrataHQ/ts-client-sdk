# ActionAgentLinkApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createActionAgentLinkV1**](#createactionagentlinkv1) | **POST** /v1/actions/{action_id}/ai-agents/{agent_id}/link | Create a Link Between an Action and an Agent|
|[**deleteActionAgentLinkV1**](#deleteactionagentlinkv1) | **DELETE** /v1/actions/{action_id}/ai-agents/{agent_id}/link | Delete a Link Between an Action and an Agent|
|[**listActionsOfAgentV1**](#listactionsofagentv1) | **GET** /v1/ai-agents/{agent_id}/actions | List All Actions Linked to a Specific Agent|

# **createActionAgentLinkV1**
> BaseResponseInput createActionAgentLinkV1()

Create a Link Between an Action and an Agent

### Example

```typescript
import {
    ActionAgentLinkApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ActionAgentLinkApi(configuration);

let actionId: string; //ID of the action (default to undefined)
let agentId: string; //ID of the agent (default to undefined)

const { status, data } = await apiInstance.createActionAgentLinkV1(
    actionId,
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionId** | [**string**] | ID of the action | defaults to undefined|
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
|**200** | Link created successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteActionAgentLinkV1**
> BaseResponseInput deleteActionAgentLinkV1()

Delete a Link Between an Action and an Agent

### Example

```typescript
import {
    ActionAgentLinkApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ActionAgentLinkApi(configuration);

let actionId: string; //ID of the action (default to undefined)
let agentId: string; //ID of the agent (default to undefined)

const { status, data } = await apiInstance.deleteActionAgentLinkV1(
    actionId,
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionId** | [**string**] | ID of the action | defaults to undefined|
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
|**200** | Link deleted successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listActionsOfAgentV1**
> Array<ActionOutput> listActionsOfAgentV1()

List All Actions Linked to a Specific Agent

### Example

```typescript
import {
    ActionAgentLinkApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ActionAgentLinkApi(configuration);

let agentId: string; //ID of the agent (default to undefined)

const { status, data } = await apiInstance.listActionsOfAgentV1(
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agentId** | [**string**] | ID of the agent | defaults to undefined|


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

