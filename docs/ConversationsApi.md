# ConversationsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addFeedbackV1**](#addfeedbackv1) | **POST** /v1/conversations/{conversation_id}/feedback | Add Feedback to a Specific Conversation|
|[**createConversationV1**](#createconversationv1) | **POST** /v1/conversations | Create a New Conversation|
|[**deleteConversationV1**](#deleteconversationv1) | **DELETE** /v1/conversations/{conversation_id} | Delete a Specific Conversation by ID|
|[**getConversationV1**](#getconversationv1) | **GET** /v1/conversations/{conversation_id} | Get a Specific Conversation by ID|
|[**listConversationsV1**](#listconversationsv1) | **GET** /v1/conversations | List All Conversations|
|[**updateConversationV1**](#updateconversationv1) | **PUT** /v1/conversations/{conversation_id} | Update a Specific Conversation by ID|

# **addFeedbackV1**
> ConversationFeedback addFeedbackV1(comment)

Add Feedback to a Specific Conversation

### Example

```typescript
import {
    ConversationsApi,
    Configuration,
    Comment
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ConversationsApi(configuration);

let conversationId: string; //ID of the conversation (default to undefined)
let comment: Comment; //

const { status, data } = await apiInstance.addFeedbackV1(
    conversationId,
    comment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **comment** | **Comment**|  | |
| **conversationId** | [**string**] | ID of the conversation | defaults to undefined|


### Return type

**ConversationFeedback**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Feedback added successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createConversationV1**
> ConversationOutput createConversationV1(conversationInput)

Create a New Conversation

### Example

```typescript
import {
    ConversationsApi,
    Configuration,
    ConversationInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ConversationsApi(configuration);

let conversationInput: ConversationInput; //

const { status, data } = await apiInstance.createConversationV1(
    conversationInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationInput** | **ConversationInput**|  | |


### Return type

**ConversationOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Conversation created successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteConversationV1**
> BaseResponseInput deleteConversationV1()

Delete a Specific Conversation by ID

### Example

```typescript
import {
    ConversationsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ConversationsApi(configuration);

let conversationId: string; //ID of the conversation (default to undefined)

const { status, data } = await apiInstance.deleteConversationV1(
    conversationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationId** | [**string**] | ID of the conversation | defaults to undefined|


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
|**200** | Conversation deleted successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConversationV1**
> ConversationOutput getConversationV1()

Get a Specific Conversation by ID

### Example

```typescript
import {
    ConversationsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ConversationsApi(configuration);

let conversationId: string; //ID of the conversation (default to undefined)

const { status, data } = await apiInstance.getConversationV1(
    conversationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationId** | [**string**] | ID of the conversation | defaults to undefined|


### Return type

**ConversationOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Conversation retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listConversationsV1**
> Array<ConversationOutput> listConversationsV1()

List All Conversations

### Example

```typescript
import {
    ConversationsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ConversationsApi(configuration);

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

const { status, data } = await apiInstance.listConversationsV1(
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

**Array<ConversationOutput>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of conversations retrieved successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateConversationV1**
> ConversationOutput updateConversationV1(conversationInput)

Update a Specific Conversation by ID

### Example

```typescript
import {
    ConversationsApi,
    Configuration,
    ConversationInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new ConversationsApi(configuration);

let conversationId: string; //ID of the conversation (default to undefined)
let conversationInput: ConversationInput; //

const { status, data } = await apiInstance.updateConversationV1(
    conversationId,
    conversationInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationInput** | **ConversationInput**|  | |
| **conversationId** | [**string**] | ID of the conversation | defaults to undefined|


### Return type

**ConversationOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Conversation updated successfully |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

