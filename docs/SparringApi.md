# SparringApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createVirtualProspectV1SparrVirtualProspectsPost**](#createvirtualprospectv1sparrvirtualprospectspost) | **POST** /v1/sparr/virtual-prospects | Create Virtual Prospect|
|[**deleteVirtualProspectV1SparrVirtualProspectsProspectIdDelete**](#deletevirtualprospectv1sparrvirtualprospectsprospectiddelete) | **DELETE** /v1/sparr/virtual-prospects/{prospect_id} | Delete Virtual Prospect|
|[**getSparringStatsV1SparrSparringStatsGet**](#getsparringstatsv1sparrsparringstatsget) | **GET** /v1/sparr/sparring-stats | Get Sparring Stats|
|[**getVirtualProspectByAgentIdV1SparrAgentAgentIdVirtualProspectGet**](#getvirtualprospectbyagentidv1sparragentagentidvirtualprospectget) | **GET** /v1/sparr/agent/{agent_id}/virtual-prospect | Get Virtual Prospect by Agent ID|
|[**getVirtualProspectV1SparrVirtualProspectsProspectIdGet**](#getvirtualprospectv1sparrvirtualprospectsprospectidget) | **GET** /v1/sparr/virtual-prospects/{prospect_id} | Get Virtual Prospect|
|[**linkVirtualProspectToAgentV1SparrVirtualProspectsProspectIdAgentAgentIdLinkPost**](#linkvirtualprospecttoagentv1sparrvirtualprospectsprospectidagentagentidlinkpost) | **POST** /v1/sparr/virtual-prospects/{prospect_id}/agent/{agent_id}/link | Link Virtual Prospect to Agent|
|[**listVirtualProspectsV1SparrVirtualProspectsGet**](#listvirtualprospectsv1sparrvirtualprospectsget) | **GET** /v1/sparr/virtual-prospects | List Virtual Prospects|
|[**updateVirtualProspectV1SparrVirtualProspectsProspectIdPut**](#updatevirtualprospectv1sparrvirtualprospectsprospectidput) | **PUT** /v1/sparr/virtual-prospects/{prospect_id} | Update Virtual Prospect|

# **createVirtualProspectV1SparrVirtualProspectsPost**
> VirtualProspectOutput createVirtualProspectV1SparrVirtualProspectsPost(virtualProspectInput)

Create a virtual prospect

### Example

```typescript
import {
    SparringApi,
    Configuration,
    VirtualProspectInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparringApi(configuration);

let virtualProspectInput: VirtualProspectInput; //

const { status, data } = await apiInstance.createVirtualProspectV1SparrVirtualProspectsPost(
    virtualProspectInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **virtualProspectInput** | **VirtualProspectInput**|  | |


### Return type

**VirtualProspectOutput**

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

# **deleteVirtualProspectV1SparrVirtualProspectsProspectIdDelete**
> BaseResponseInput deleteVirtualProspectV1SparrVirtualProspectsProspectIdDelete()

Delete a virtual prospect

### Example

```typescript
import {
    SparringApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparringApi(configuration);

let prospectId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteVirtualProspectV1SparrVirtualProspectsProspectIdDelete(
    prospectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prospectId** | [**string**] |  | defaults to undefined|


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

# **getSparringStatsV1SparrSparringStatsGet**
> SparrStatsResponse getSparringStatsV1SparrSparringStatsGet()

Get sparring stats from Trata AI like call count, prospect count, etc.

### Example

```typescript
import {
    SparringApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparringApi(configuration);

const { status, data } = await apiInstance.getSparringStatsV1SparrSparringStatsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SparrStatsResponse**

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

# **getVirtualProspectByAgentIdV1SparrAgentAgentIdVirtualProspectGet**
> Array<VirtualProspectOutput> getVirtualProspectByAgentIdV1SparrAgentAgentIdVirtualProspectGet()

Get virtual prospect associated with an agent

### Example

```typescript
import {
    SparringApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparringApi(configuration);

let agentId: string; // (default to undefined)

const { status, data } = await apiInstance.getVirtualProspectByAgentIdV1SparrAgentAgentIdVirtualProspectGet(
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agentId** | [**string**] |  | defaults to undefined|


### Return type

**Array<VirtualProspectOutput>**

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

# **getVirtualProspectV1SparrVirtualProspectsProspectIdGet**
> VirtualProspectOutput getVirtualProspectV1SparrVirtualProspectsProspectIdGet()

Get a virtual prospect

### Example

```typescript
import {
    SparringApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparringApi(configuration);

let prospectId: string; // (default to undefined)

const { status, data } = await apiInstance.getVirtualProspectV1SparrVirtualProspectsProspectIdGet(
    prospectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prospectId** | [**string**] |  | defaults to undefined|


### Return type

**VirtualProspectOutput**

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

# **linkVirtualProspectToAgentV1SparrVirtualProspectsProspectIdAgentAgentIdLinkPost**
> VirtualProspectAIAgentLink linkVirtualProspectToAgentV1SparrVirtualProspectsProspectIdAgentAgentIdLinkPost()

Link a virtual prospect to an agent

### Example

```typescript
import {
    SparringApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparringApi(configuration);

let prospectId: string; // (default to undefined)
let agentId: string; // (default to undefined)

const { status, data } = await apiInstance.linkVirtualProspectToAgentV1SparrVirtualProspectsProspectIdAgentAgentIdLinkPost(
    prospectId,
    agentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prospectId** | [**string**] |  | defaults to undefined|
| **agentId** | [**string**] |  | defaults to undefined|


### Return type

**VirtualProspectAIAgentLink**

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

# **listVirtualProspectsV1SparrVirtualProspectsGet**
> Array<VirtualProspectOutput> listVirtualProspectsV1SparrVirtualProspectsGet()

List all virtual prospects

### Example

```typescript
import {
    SparringApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparringApi(configuration);

let searchBy: string; // (optional) (default to undefined)
let searchValue: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to undefined)
let sortOrder: SortOrder; // (optional) (default to undefined)
let skip: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let updatedAfter: string; // (optional) (default to undefined)
let updatedBefore: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listVirtualProspectsV1SparrVirtualProspectsGet(
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

**Array<VirtualProspectOutput>**

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

# **updateVirtualProspectV1SparrVirtualProspectsProspectIdPut**
> VirtualProspectOutput updateVirtualProspectV1SparrVirtualProspectsProspectIdPut(virtualProspectInput)

Update a virtual prospect

### Example

```typescript
import {
    SparringApi,
    Configuration,
    VirtualProspectInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparringApi(configuration);

let prospectId: string; // (default to undefined)
let virtualProspectInput: VirtualProspectInput; //

const { status, data } = await apiInstance.updateVirtualProspectV1SparrVirtualProspectsProspectIdPut(
    prospectId,
    virtualProspectInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **virtualProspectInput** | **VirtualProspectInput**|  | |
| **prospectId** | [**string**] |  | defaults to undefined|


### Return type

**VirtualProspectOutput**

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

