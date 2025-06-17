# VoiceModelsApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listSparrVoiceModelsV1**](#listsparrvoicemodelsv1) | **GET** /v1/sparr-voice-models | Get List Of Voices Available For Sparr|
|[**listVoiceModelsV1**](#listvoicemodelsv1) | **GET** /v1/voice-models | Get List Of Voices Available For Conversations|

# **listSparrVoiceModelsV1**
> Array<VoiceModel> listSparrVoiceModelsV1()

Get List Of Voices Available For Sparr

### Example

```typescript
import {
    VoiceModelsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new VoiceModelsApi(configuration);

const { status, data } = await apiInstance.listSparrVoiceModelsV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<VoiceModel>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listVoiceModelsV1**
> Array<VoiceModel> listVoiceModelsV1()

Get List Of Voices Available For Conversations

### Example

```typescript
import {
    VoiceModelsApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new VoiceModelsApi(configuration);

const { status, data } = await apiInstance.listVoiceModelsV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<VoiceModel>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

