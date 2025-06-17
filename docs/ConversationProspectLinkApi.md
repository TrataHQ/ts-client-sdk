# ConversationProspectLinkApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createConversationProspectLinkV1**](#createconversationprospectlinkv1) | **POST** /v1/conversations/{conversation_id}/prospects/{prospect_id}/links | Create a link between a conversation and a prospect|
|[**deleteConversationProspectLinkV1**](#deleteconversationprospectlinkv1) | **DELETE** /v1/conversations/{conversation_id}/prospects/{prospect_id}/links | Delete a link between a conversation and a prospect|
|[**listConversationsOfProspectsV1**](#listconversationsofprospectsv1) | **GET** /v1/prospects/{prospect_id}/conversations | List all conversations linked to a specific prospect|

# **createConversationProspectLinkV1**
> BaseResponseInput createConversationProspectLinkV1()

Create a link between a conversation and a prospect

### Example

```typescript
import {
    ConversationProspectLinkApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ConversationProspectLinkApi(configuration);

let conversationId: string; //ID of the conversation (default to undefined)
let prospectId: string; //ID of the prospect (default to undefined)

const { status, data } = await apiInstance.createConversationProspectLinkV1(
    conversationId,
    prospectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationId** | [**string**] | ID of the conversation | defaults to undefined|
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
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteConversationProspectLinkV1**
> BaseResponseInput deleteConversationProspectLinkV1()

Delete a link between a conversation and a prospect

### Example

```typescript
import {
    ConversationProspectLinkApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ConversationProspectLinkApi(configuration);

let conversationId: string; //ID of the conversation (default to undefined)
let prospectId: string; //ID of the prospect (default to undefined)

const { status, data } = await apiInstance.deleteConversationProspectLinkV1(
    conversationId,
    prospectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationId** | [**string**] | ID of the conversation | defaults to undefined|
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
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listConversationsOfProspectsV1**
> Array<ConversationOutput> listConversationsOfProspectsV1()

List all conversations linked to a specific prospect

### Example

```typescript
import {
    ConversationProspectLinkApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ConversationProspectLinkApi(configuration);

let prospectId: string; //ID of the prospect (default to undefined)

const { status, data } = await apiInstance.listConversationsOfProspectsV1(
    prospectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prospectId** | [**string**] | ID of the prospect | defaults to undefined|


### Return type

**Array<ConversationOutput>**

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

