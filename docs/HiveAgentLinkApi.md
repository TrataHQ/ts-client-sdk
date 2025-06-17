# HiveAgentLinkApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createHiveAgentLinkV1**](#createhiveagentlinkv1) | **POST** /v1/hives/{hive_id}/ai-agents/{agent_id}/link | Create a Link Between a Hive and an Agent|
|[**deleteHiveAgentLinkV1**](#deletehiveagentlinkv1) | **DELETE** /v1/hives/{hive_id}/ai-agents/{agent_id}/link | Delete a Link Between a Hive and an Agent|
|[**listAgentsOfHiveV1**](#listagentsofhivev1) | **GET** /v1/hives/{hive_id}/ai-agents | List All Agents Linked to a Specific Hive|
|[**listHivesOfAgentV1**](#listhivesofagentv1) | **GET** /v1/ai-agents/{agent_id}/hives | List All Hives Linked to a Specific Agent|

# **createHiveAgentLinkV1**
> BaseResponseInput createHiveAgentLinkV1()

Create a Link Between a Hive and an Agent

### Example

```typescript
import {
    HiveAgentLinkApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new HiveAgentLinkApi(configuration);

let hiveId: string; //ID of the hive (default to undefined)
let agentId: string; //ID of the agent (default to undefined)

const { status, data } = await apiInstance.createHiveAgentLinkV1(
    hiveId,
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hiveId** | [**string**] | ID of the hive | defaults to undefined|
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

# **deleteHiveAgentLinkV1**
> BaseResponseInput deleteHiveAgentLinkV1()

Delete a Link Between a Hive and an Agent

### Example

```typescript
import {
    HiveAgentLinkApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new HiveAgentLinkApi(configuration);

let hiveId: string; //ID of the hive (default to undefined)
let agentId: string; //ID of the agent (default to undefined)

const { status, data } = await apiInstance.deleteHiveAgentLinkV1(
    hiveId,
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hiveId** | [**string**] | ID of the hive | defaults to undefined|
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

# **listAgentsOfHiveV1**
> Array<AIAgentOutput> listAgentsOfHiveV1()

List All Agents Linked to a Specific Hive

### Example

```typescript
import {
    HiveAgentLinkApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new HiveAgentLinkApi(configuration);

let hiveId: string; //ID of the hive (default to undefined)

const { status, data } = await apiInstance.listAgentsOfHiveV1(
    hiveId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hiveId** | [**string**] | ID of the hive | defaults to undefined|


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
|**200** | List of agents retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listHivesOfAgentV1**
> Array<Hive> listHivesOfAgentV1()

List All Hives Linked to a Specific Agent

### Example

```typescript
import {
    HiveAgentLinkApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new HiveAgentLinkApi(configuration);

let agentId: string; //ID of the agent (default to undefined)

const { status, data } = await apiInstance.listHivesOfAgentV1(
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agentId** | [**string**] | ID of the agent | defaults to undefined|


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

