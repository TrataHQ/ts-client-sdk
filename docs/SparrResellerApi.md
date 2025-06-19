# SparrResellerApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCourseResellerV1**](#createcourseresellerv1) | **POST** /v1/resellers/sparr/courses/ | Create Course|
|[**createEvaluatorResellerV1**](#createevaluatorresellerv1) | **POST** /v1/resellers/sparr/evaluators/ | Create Evaluator|
|[**createGoalsResellerV1**](#creategoalsresellerv1) | **POST** /v1/resellers/sparr/goals/ | Create Goals|
|[**createPersonaResellerV1**](#createpersonaresellerv1) | **POST** /v1/resellers/sparr/personas/ | Create Persona|
|[**createScenarioResellerV1**](#createscenarioresellerv1) | **POST** /v1/resellers/sparr/scenarios/ | Create Scenario|
|[**createTrackerResellerV1**](#createtrackerresellerv1) | **POST** /v1/resellers/sparr/trackers/ | Create Tracker|
|[**deleteCourseResellerV1**](#deletecourseresellerv1) | **DELETE** /v1/resellers/sparr/courses/{course_id} | Delete Course|
|[**deleteEvaluatorResellerV1**](#deleteevaluatorresellerv1) | **DELETE** /v1/resellers/sparr/evaluators/{params_id} | Delete Evaluator|
|[**deleteGoalsResellerV1**](#deletegoalsresellerv1) | **DELETE** /v1/resellers/sparr/goals/{goals_id} | Delete Goals|
|[**deletePersonaResellerV1**](#deletepersonaresellerv1) | **DELETE** /v1/resellers/sparr/personas/{persona_id} | Delete Persona|
|[**deleteScenarioResellerV1**](#deletescenarioresellerv1) | **DELETE** /v1/resellers/sparr/scenarios/{scenario_id} | Delete Scenario|
|[**deleteTrackerResellerV1**](#deletetrackerresellerv1) | **DELETE** /v1/resellers/sparr/trackers/{tracker_id} | Delete Tracker|
|[**generateEvaluatorResellerV1**](#generateevaluatorresellerv1) | **POST** /v1/resellers/sparr/evaluators/generate | Generate Evaluator|
|[**getCourseResellerV1**](#getcourseresellerv1) | **GET** /v1/resellers/sparr/courses/{course_id} | Get Course|
|[**getEvaluatorResellerV1**](#getevaluatorresellerv1) | **GET** /v1/resellers/sparr/evaluators/{params_id} | Get Evaluator By Id|
|[**getGoalsResellerV1**](#getgoalsresellerv1) | **GET** /v1/resellers/sparr/goals/{goals_id} | Get Goals By Id|
|[**getPersonaResellerV1**](#getpersonaresellerv1) | **GET** /v1/resellers/sparr/personas/{persona_id} | Get Persona|
|[**getScenarioResellerV1**](#getscenarioresellerv1) | **GET** /v1/resellers/sparr/scenarios/{scenario_id} | Get Scenario|
|[**getTrackerResellerV1**](#gettrackerresellerv1) | **GET** /v1/resellers/sparr/trackers/{tracker_id} | Get Tracker By Id|
|[**importLinkedinPersonaResellerV1**](#importlinkedinpersonaresellerv1) | **POST** /v1/resellers/sparr/personas/import-linkedin | Import Linkedin Persona|
|[**listCoursesResellerV1**](#listcoursesresellerv1) | **GET** /v1/resellers/sparr/courses/ | Get Courses|
|[**listEvaluatorResellerV1**](#listevaluatorresellerv1) | **GET** /v1/resellers/sparr/evaluators/ | Get Evaluator|
|[**listGoalsResellerV1**](#listgoalsresellerv1) | **GET** /v1/resellers/sparr/goals/ | Get Goals|
|[**listPersonasResellerV1**](#listpersonasresellerv1) | **GET** /v1/resellers/sparr/personas/ | Get Personas|
|[**listScenariosResellerV1**](#listscenariosresellerv1) | **GET** /v1/resellers/sparr/scenarios/ | Get Scenarios|
|[**listTrackerResellerV1**](#listtrackerresellerv1) | **GET** /v1/resellers/sparr/trackers/ | Get Trackers|
|[**searchGoalsResellerV1**](#searchgoalsresellerv1) | **GET** /v1/resellers/sparr/goals/search | Search Goals|
|[**searchPersonasResellerV1**](#searchpersonasresellerv1) | **GET** /v1/resellers/sparr/personas/search | Search Personas|
|[**searchScenariosResellerV1**](#searchscenariosresellerv1) | **GET** /v1/resellers/sparr/scenarios/search | Search Scenarios|
|[**searchTrackerResellerV1**](#searchtrackerresellerv1) | **GET** /v1/resellers/sparr/trackers/search | Search Tracker|
|[**updateCourseResellerV1**](#updatecourseresellerv1) | **PUT** /v1/resellers/sparr/courses/{course_id} | Update Course|
|[**updateEvaluatorResellerV1**](#updateevaluatorresellerv1) | **PUT** /v1/resellers/sparr/evaluators/{params_id} | Update Evaluator|
|[**updateGoalsResellerV1**](#updategoalsresellerv1) | **PUT** /v1/resellers/sparr/goals/{goals_id} | Update Goals|
|[**updatePersonaResellerV1**](#updatepersonaresellerv1) | **PUT** /v1/resellers/sparr/personas/{persona_id} | Update Persona|
|[**updateScenarioResellerV1**](#updatescenarioresellerv1) | **PUT** /v1/resellers/sparr/scenarios/{scenario_id} | Update Scenario|
|[**updateTrackerResellerV1**](#updatetrackerresellerv1) | **PUT** /v1/resellers/sparr/trackers/{tracker_id} | Update Tracker|

# **createCourseResellerV1**
> CourseResponse createCourseResellerV1(courseRequest)

Create a new course

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    CourseRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let courseRequest: CourseRequest; //

const { status, data } = await apiInstance.createCourseResellerV1(
    courseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courseRequest** | **CourseRequest**|  | |


### Return type

**CourseResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createEvaluatorResellerV1**
> Evaluator createEvaluatorResellerV1(evaluatorCore)

Create a new evaluator

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    EvaluatorCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let evaluatorCore: EvaluatorCore; //

const { status, data } = await apiInstance.createEvaluatorResellerV1(
    evaluatorCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **evaluatorCore** | **EvaluatorCore**|  | |


### Return type

**Evaluator**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGoalsResellerV1**
> SparrDbModelsGoal createGoalsResellerV1(goalCoreInput)

Create a new goals collection

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    GoalCoreInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let goalCoreInput: GoalCoreInput; //

const { status, data } = await apiInstance.createGoalsResellerV1(
    goalCoreInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalCoreInput** | **GoalCoreInput**|  | |


### Return type

**SparrDbModelsGoal**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPersonaResellerV1**
> Persona createPersonaResellerV1(personaCore)

Create a new persona

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    PersonaCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let personaCore: PersonaCore; //

const { status, data } = await apiInstance.createPersonaResellerV1(
    personaCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personaCore** | **PersonaCore**|  | |


### Return type

**Persona**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createScenarioResellerV1**
> ScenarioResponse createScenarioResellerV1(createScenarioRequest)

Create a new scenario

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    CreateScenarioRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let createScenarioRequest: CreateScenarioRequest; //

const { status, data } = await apiInstance.createScenarioResellerV1(
    createScenarioRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createScenarioRequest** | **CreateScenarioRequest**|  | |


### Return type

**ScenarioResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTrackerResellerV1**
> Tracker createTrackerResellerV1(trackerCore)

Create a new tracker

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    TrackerCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let trackerCore: TrackerCore; //

const { status, data } = await apiInstance.createTrackerResellerV1(
    trackerCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trackerCore** | **TrackerCore**|  | |


### Return type

**Tracker**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCourseResellerV1**
> SparrModelsBaseBaseResponse deleteCourseResellerV1()

Delete a course

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let courseId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCourseResellerV1(
    courseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courseId** | [**string**] |  | defaults to undefined|


### Return type

**SparrModelsBaseBaseResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteEvaluatorResellerV1**
> SparrModelsBaseBaseResponse deleteEvaluatorResellerV1()

Delete evaluator

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let paramsId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteEvaluatorResellerV1(
    paramsId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paramsId** | [**string**] |  | defaults to undefined|


### Return type

**SparrModelsBaseBaseResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGoalsResellerV1**
> SparrModelsBaseBaseResponse deleteGoalsResellerV1()

Delete a goals collection

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let goalsId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteGoalsResellerV1(
    goalsId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalsId** | [**string**] |  | defaults to undefined|


### Return type

**SparrModelsBaseBaseResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePersonaResellerV1**
> SparrModelsBaseBaseResponse deletePersonaResellerV1()

Delete a persona

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let personaId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePersonaResellerV1(
    personaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personaId** | [**string**] |  | defaults to undefined|


### Return type

**SparrModelsBaseBaseResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteScenarioResellerV1**
> SparrModelsBaseBaseResponse deleteScenarioResellerV1()

Delete a scenario

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let scenarioId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteScenarioResellerV1(
    scenarioId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scenarioId** | [**string**] |  | defaults to undefined|


### Return type

**SparrModelsBaseBaseResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTrackerResellerV1**
> SparrModelsBaseBaseResponse deleteTrackerResellerV1()

Delete a tracker

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let trackerId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTrackerResellerV1(
    trackerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trackerId** | [**string**] |  | defaults to undefined|


### Return type

**SparrModelsBaseBaseResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateEvaluatorResellerV1**
> CombinedEvaluatorResponse generateEvaluatorResellerV1(flexibleGenerationRequest)

Generate evaluator data from files and/or existing core components

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    FlexibleGenerationRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let flexibleGenerationRequest: FlexibleGenerationRequest; //

const { status, data } = await apiInstance.generateEvaluatorResellerV1(
    flexibleGenerationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flexibleGenerationRequest** | **FlexibleGenerationRequest**|  | |


### Return type

**CombinedEvaluatorResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCourseResellerV1**
> CourseResponse getCourseResellerV1()

Get a specific course by ID

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let courseId: string; // (default to undefined)

const { status, data } = await apiInstance.getCourseResellerV1(
    courseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courseId** | [**string**] |  | defaults to undefined|


### Return type

**CourseResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEvaluatorResellerV1**
> Evaluator getEvaluatorResellerV1()

Get a specific evaluator by ID that is either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let paramsId: string; // (default to undefined)

const { status, data } = await apiInstance.getEvaluatorResellerV1(
    paramsId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paramsId** | [**string**] |  | defaults to undefined|


### Return type

**Evaluator**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGoalsResellerV1**
> SparrDbModelsGoal getGoalsResellerV1()

Get a specific goals collection by ID that is either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let goalsId: string; // (default to undefined)

const { status, data } = await apiInstance.getGoalsResellerV1(
    goalsId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalsId** | [**string**] |  | defaults to undefined|


### Return type

**SparrDbModelsGoal**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPersonaResellerV1**
> Persona getPersonaResellerV1()

Get a specific persona by ID that is either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let personaId: string; // (default to undefined)

const { status, data } = await apiInstance.getPersonaResellerV1(
    personaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personaId** | [**string**] |  | defaults to undefined|


### Return type

**Persona**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getScenarioResellerV1**
> ScenarioResponse getScenarioResellerV1()

Get a specific scenario by ID that is either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let scenarioId: string; // (default to undefined)

const { status, data } = await apiInstance.getScenarioResellerV1(
    scenarioId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scenarioId** | [**string**] |  | defaults to undefined|


### Return type

**ScenarioResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTrackerResellerV1**
> Tracker getTrackerResellerV1()

Get a specific tracker by ID that is either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let trackerId: string; // (default to undefined)

const { status, data } = await apiInstance.getTrackerResellerV1(
    trackerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trackerId** | [**string**] |  | defaults to undefined|


### Return type

**Tracker**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **importLinkedinPersonaResellerV1**
> Persona importLinkedinPersonaResellerV1()

Import a persona from LinkedIn URL

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let linkedinUrl: string; // (default to undefined)

const { status, data } = await apiInstance.importLinkedinPersonaResellerV1(
    linkedinUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **linkedinUrl** | [**string**] |  | defaults to undefined|


### Return type

**Persona**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCoursesResellerV1**
> Array<CourseResponse> listCoursesResellerV1()

Get all courses including reseller assignments

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let skip: number; //Skip for pagination (optional) (default to 0)
let limit: number; //Limit for pagination (optional) (default to 15)
let status: string; //Filter by status (optional) (default to undefined)

const { status, data } = await apiInstance.listCoursesResellerV1(
    skip,
    limit,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skip** | [**number**] | Skip for pagination | (optional) defaults to 0|
| **limit** | [**number**] | Limit for pagination | (optional) defaults to 15|
| **status** | [**string**] | Filter by status | (optional) defaults to undefined|


### Return type

**Array<CourseResponse>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listEvaluatorResellerV1**
> Array<Evaluator> listEvaluatorResellerV1()

Get all evaluator that are either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)

const { status, data } = await apiInstance.listEvaluatorResellerV1(
    skip,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skip** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 100|


### Return type

**Array<Evaluator>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listGoalsResellerV1**
> Array<SparrDbModelsGoal> listGoalsResellerV1()

Get all goals that are either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)

const { status, data } = await apiInstance.listGoalsResellerV1(
    skip,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skip** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 100|


### Return type

**Array<SparrDbModelsGoal>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPersonasResellerV1**
> Array<Persona> listPersonasResellerV1()

Get all personas that are either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)
let tags: string; //Filter personas by tag, comma separated names (optional) (default to undefined)

const { status, data } = await apiInstance.listPersonasResellerV1(
    skip,
    limit,
    tags
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skip** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 100|
| **tags** | [**string**] | Filter personas by tag, comma separated names | (optional) defaults to undefined|


### Return type

**Array<Persona>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listScenariosResellerV1**
> Array<ScenarioResponse> listScenariosResellerV1()

Get all scenarios that are either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)
let tags: string; //Filter scenarios by tag, comma separated names (optional) (default to undefined)

const { status, data } = await apiInstance.listScenariosResellerV1(
    skip,
    limit,
    tags
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skip** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 100|
| **tags** | [**string**] | Filter scenarios by tag, comma separated names | (optional) defaults to undefined|


### Return type

**Array<ScenarioResponse>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTrackerResellerV1**
> Array<Tracker> listTrackerResellerV1()

Get all trackers that are either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)

const { status, data } = await apiInstance.listTrackerResellerV1(
    skip,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skip** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 100|


### Return type

**Array<Tracker>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchGoalsResellerV1**
> GoalsSearchResponse searchGoalsResellerV1()

Search goals by name and description

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let query: string; //Search query string (default to undefined)
let page: number; //Page number (optional) (default to 1)
let size: number; //Items per page (optional) (default to 10)

const { status, data } = await apiInstance.searchGoalsResellerV1(
    query,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | Search query string | defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **size** | [**number**] | Items per page | (optional) defaults to 10|


### Return type

**GoalsSearchResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchPersonasResellerV1**
> PersonaSearchResponse searchPersonasResellerV1()

Search personas by name, title and company

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let query: string; //Search query string (default to undefined)
let page: number; //Page number (optional) (default to 1)
let size: number; //Items per page (optional) (default to 10)

const { status, data } = await apiInstance.searchPersonasResellerV1(
    query,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | Search query string | defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **size** | [**number**] | Items per page | (optional) defaults to 10|


### Return type

**PersonaSearchResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchScenariosResellerV1**
> ScenarioSearchResponse searchScenariosResellerV1()

Search scenarios by name and description

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let query: string; //Search query string (default to undefined)
let page: number; //Page number (optional) (default to 1)
let size: number; //Items per page (optional) (default to 10)

const { status, data } = await apiInstance.searchScenariosResellerV1(
    query,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | Search query string | defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **size** | [**number**] | Items per page | (optional) defaults to 10|


### Return type

**ScenarioSearchResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchTrackerResellerV1**
> TrackerSearchResponse searchTrackerResellerV1()

Search trackers by name and description

### Example

```typescript
import {
    SparrResellerApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let query: string; //Search query string (default to undefined)
let page: number; //Page number (optional) (default to 1)
let size: number; //Items per page (optional) (default to 10)

const { status, data } = await apiInstance.searchTrackerResellerV1(
    query,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | Search query string | defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **size** | [**number**] | Items per page | (optional) defaults to 10|


### Return type

**TrackerSearchResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCourseResellerV1**
> CourseResponse updateCourseResellerV1(courseUpdateRequest)

Update a course

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    CourseUpdateRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let courseId: string; // (default to undefined)
let courseUpdateRequest: CourseUpdateRequest; //

const { status, data } = await apiInstance.updateCourseResellerV1(
    courseId,
    courseUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courseUpdateRequest** | **CourseUpdateRequest**|  | |
| **courseId** | [**string**] |  | defaults to undefined|


### Return type

**CourseResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateEvaluatorResellerV1**
> Evaluator updateEvaluatorResellerV1(evaluatorCore)

Update evaluator

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    EvaluatorCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let paramsId: string; // (default to undefined)
let evaluatorCore: EvaluatorCore; //

const { status, data } = await apiInstance.updateEvaluatorResellerV1(
    paramsId,
    evaluatorCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **evaluatorCore** | **EvaluatorCore**|  | |
| **paramsId** | [**string**] |  | defaults to undefined|


### Return type

**Evaluator**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGoalsResellerV1**
> SparrDbModelsGoal updateGoalsResellerV1(goalCoreInput)

Update a goals collection

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    GoalCoreInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let goalsId: string; // (default to undefined)
let goalCoreInput: GoalCoreInput; //

const { status, data } = await apiInstance.updateGoalsResellerV1(
    goalsId,
    goalCoreInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalCoreInput** | **GoalCoreInput**|  | |
| **goalsId** | [**string**] |  | defaults to undefined|


### Return type

**SparrDbModelsGoal**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePersonaResellerV1**
> Persona updatePersonaResellerV1(personaCore)

Update a persona

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    PersonaCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let personaId: string; // (default to undefined)
let personaCore: PersonaCore; //

const { status, data } = await apiInstance.updatePersonaResellerV1(
    personaId,
    personaCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personaCore** | **PersonaCore**|  | |
| **personaId** | [**string**] |  | defaults to undefined|


### Return type

**Persona**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateScenarioResellerV1**
> ScenarioResponse updateScenarioResellerV1(createScenarioRequest)

Update a scenario

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    CreateScenarioRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let scenarioId: string; // (default to undefined)
let createScenarioRequest: CreateScenarioRequest; //

const { status, data } = await apiInstance.updateScenarioResellerV1(
    scenarioId,
    createScenarioRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createScenarioRequest** | **CreateScenarioRequest**|  | |
| **scenarioId** | [**string**] |  | defaults to undefined|


### Return type

**ScenarioResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTrackerResellerV1**
> Tracker updateTrackerResellerV1(trackerCore)

Update a tracker

### Example

```typescript
import {
    SparrResellerApi,
    Configuration,
    TrackerCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrResellerApi(configuration);

let trackerId: string; // (default to undefined)
let trackerCore: TrackerCore; //

const { status, data } = await apiInstance.updateTrackerResellerV1(
    trackerId,
    trackerCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trackerCore** | **TrackerCore**|  | |
| **trackerId** | [**string**] |  | defaults to undefined|


### Return type

**Tracker**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

