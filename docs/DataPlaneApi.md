# DataPlaneApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createConnection**](#createconnection) | **POST** /v1/connections | Create Connection|
|[**getPlivoAudioStreamXml**](#getplivoaudiostreamxml) | **GET** /v1/connections/{connection_id}/plivo-audio-stream-xml | Get Audio Stream XML For Plivo|
|[**listConnections**](#listconnections) | **GET** /v1/connections | Listconnections|

# **createConnection**
> ConnectionOutput createConnection(connectionSource)

Create a new connection for an AI Agent to start a voice conversation

### Example

```typescript
import {
    DataPlaneApi,
    Configuration,
    ConnectionSource
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new DataPlaneApi(configuration);

let agentId: string; // (default to undefined)
let connectionSource: ConnectionSource; //
let prospectId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.createConnection(
    agentId,
    connectionSource,
    prospectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectionSource** | **ConnectionSource**|  | |
| **agentId** | [**string**] |  | defaults to undefined|
| **prospectId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ConnectionOutput**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPlivoAudioStreamXml**
> BaseResponseInput getPlivoAudioStreamXml()

Get the audio stream xml for Plivo to start a voice conversation

### Example

```typescript
import {
    DataPlaneApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new DataPlaneApi(configuration);

let connectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getPlivoAudioStreamXml(
    connectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectionId** | [**string**] |  | defaults to undefined|


### Return type

**BaseResponseInput**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listConnections**
> Array<ConnectionOutput> listConnections()

List connections

### Example

```typescript
import {
    DataPlaneApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new DataPlaneApi(configuration);

let sourceName: string; // (optional) (default to undefined)
let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listConnections(
    sourceName,
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
| **sourceName** | [**string**] |  | (optional) defaults to undefined|
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

**Array<ConnectionOutput>**

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

