# SparrApi

All URIs are relative to *https://api.trata.ai*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addModuleAttemptV1**](#addmoduleattemptv1) | **POST** /v1/sparr/courses/modules/{module_id}/attempts | Add Module Attempt|
|[**assignCourseV1**](#assigncoursev1) | **POST** /v1/sparr/courses/{course_id}/assign/{user_id} | Assign Course|
|[**attachTagV1SparrEntityTagsEntityTypeEntityIdTagsPost**](#attachtagv1sparrentitytagsentitytypeentityidtagspost) | **POST** /v1/sparr/entity-tags/{entity_type}/{entity_id}/tags | Attach Tag|
|[**createCheckoutSessionForPriceV1**](#createcheckoutsessionforpricev1) | **POST** /v1/sparr/pricing/{price_id}/checkout | Create Checkout Session For Price|
|[**createCourseV1**](#createcoursev1) | **POST** /v1/sparr/courses/ | Create Course|
|[**createCustomerPortalV1**](#createcustomerportalv1) | **POST** /v1/sparr/customers/portal | Create Customer Portal|
|[**createFeedbackV1**](#createfeedbackv1) | **POST** /v1/sparr/feedbacks/ | Create Feedback|
|[**createGoalsV1**](#creategoalsv1) | **POST** /v1/sparr/goals/ | Create Goals|
|[**createPersonaV1**](#createpersonav1) | **POST** /v1/sparr/personas/ | Create Persona|
|[**createPostCallEvaluationParamsV1**](#createpostcallevaluationparamsv1) | **POST** /v1/sparr/evaluators/ | Create Evaluator|
|[**createScenarioV1**](#createscenariov1) | **POST** /v1/sparr/scenarios/ | Create Scenario|
|[**createTrackerV1**](#createtrackerv1) | **POST** /v1/sparr/trackers/ | Create Tracker|
|[**deleteCourseV1**](#deletecoursev1) | **DELETE** /v1/sparr/courses/{course_id} | Delete Course|
|[**deleteEvaluatorV1**](#deleteevaluatorv1) | **DELETE** /v1/sparr/evaluators/{params_id} | Delete Evaluator|
|[**deleteFeedbackV1**](#deletefeedbackv1) | **DELETE** /v1/sparr/feedbacks/{feedback_id} | Delete Feedback|
|[**deleteFileV1**](#deletefilev1) | **DELETE** /v1/sparr/files/{file_id} | Delete File|
|[**deleteGoalsV1**](#deletegoalsv1) | **DELETE** /v1/sparr/goals/{goals_id} | Delete Goals|
|[**deletePersonaV1**](#deletepersonav1) | **DELETE** /v1/sparr/personas/{persona_id} | Delete Persona|
|[**deleteScenarioV1**](#deletescenariov1) | **DELETE** /v1/sparr/scenarios/{scenario_id} | Delete Scenario|
|[**deleteTrackerV1**](#deletetrackerv1) | **DELETE** /v1/sparr/trackers/{tracker_id} | Delete Tracker|
|[**detachTagV1SparrEntityTagsEntityTypeEntityIdTagsTagNameDelete**](#detachtagv1sparrentitytagsentitytypeentityidtagstagnamedelete) | **DELETE** /v1/sparr/entity-tags/{entity_type}/{entity_id}/tags/{tag_name} | Detach Tag|
|[**generateEvaluatorV1**](#generateevaluatorv1) | **POST** /v1/sparr/evaluators/generate | Generate Evaluator|
|[**getCourseV1**](#getcoursev1) | **GET** /v1/sparr/courses/{course_id} | Get Course|
|[**getCreditsV1**](#getcreditsv1) | **GET** /v1/sparr/credits | Get Credits V1|
|[**getEntitiesByTagV1SparrEntityTagsEntityTypeByTagTagNameGet**](#getentitiesbytagv1sparrentitytagsentitytypebytagtagnameget) | **GET** /v1/sparr/entity-tags/{entity_type}/by-tag/{tag_name} | Get Entities By Tag|
|[**getEntityTagsV1SparrEntityTagsEntityTypeEntityIdTagsGet**](#getentitytagsv1sparrentitytagsentitytypeentityidtagsget) | **GET** /v1/sparr/entity-tags/{entity_type}/{entity_id}/tags | Get Entity Tags|
|[**getEvaluatorV1**](#getevaluatorv1) | **GET** /v1/sparr/evaluators/{params_id} | Get Evaluator By Id|
|[**getFeedbackV1**](#getfeedbackv1) | **GET** /v1/sparr/feedbacks/{feedback_id} | Get Feedback|
|[**getFileV1**](#getfilev1) | **GET** /v1/sparr/files/{file_id} | Get File|
|[**getGoalsV1**](#getgoalsv1) | **GET** /v1/sparr/goals/{goals_id} | Get Goals By Id|
|[**getMetricsV1**](#getmetricsv1) | **POST** /v1/sparr/feedbacks/metrics | Get Metrics|
|[**getPersonaV1**](#getpersonav1) | **GET** /v1/sparr/personas/{persona_id} | Get Persona|
|[**getPricingV1**](#getpricingv1) | **GET** /v1/sparr/pricing | Get Pricing V1|
|[**getScenarioV1**](#getscenariov1) | **GET** /v1/sparr/scenarios/{scenario_id} | Get Scenario|
|[**getTrackerV1**](#gettrackerv1) | **GET** /v1/sparr/trackers/{tracker_id} | Get Tracker By Id|
|[**getUserStatsV1**](#getuserstatsv1) | **GET** /v1/sparr/user_stats/{user_id} | Get User Stats|
|[**importLinkedinPersonaV1**](#importlinkedinpersonav1) | **POST** /v1/sparr/personas/import-linkedin | Import Linkedin Persona|
|[**listCoursesV1**](#listcoursesv1) | **GET** /v1/sparr/courses/ | Get Courses|
|[**listEvaluatorV1**](#listevaluatorv1) | **GET** /v1/sparr/evaluators/ | Get Evaluator|
|[**listFeedbacksV1**](#listfeedbacksv1) | **GET** /v1/sparr/feedbacks/ | Get Feedbacks|
|[**listGoalsV1**](#listgoalsv1) | **GET** /v1/sparr/goals/ | Get Goals|
|[**listPersonasV1**](#listpersonasv1) | **GET** /v1/sparr/personas/ | Get Personas|
|[**listScenariosV1**](#listscenariosv1) | **GET** /v1/sparr/scenarios/ | Get Scenarios|
|[**listTrackerV1**](#listtrackerv1) | **GET** /v1/sparr/trackers/ | Get Trackers|
|[**listUserAssignmentsV1**](#listuserassignmentsv1) | **GET** /v1/sparr/courses/users/{user_id}/assignments | Get User Assignments|
|[**listUserCourseAttemptsV1**](#listusercourseattemptsv1) | **GET** /v1/sparr/courses/{course_id}/attempts/users/{user_id} | Get User Course Attempts|
|[**listUserModuleAttemptsV1**](#listusermoduleattemptsv1) | **GET** /v1/sparr/courses/modules/{module_id}/attempts/{user_id} | Get User Module Attempts|
|[**revokeCourseV1**](#revokecoursev1) | **DELETE** /v1/sparr/courses/{course_id}/assign/{user_id} | Revoke Course|
|[**searchGoalsV1**](#searchgoalsv1) | **GET** /v1/sparr/goals/search | Search Goals|
|[**searchPersonasV1**](#searchpersonasv1) | **GET** /v1/sparr/personas/search | Search Personas|
|[**searchScenariosV1**](#searchscenariosv1) | **GET** /v1/sparr/scenarios/search | Search Scenarios|
|[**searchTrackerV1**](#searchtrackerv1) | **GET** /v1/sparr/trackers/search | Search Tracker|
|[**statusSparrStatusGet**](#statussparrstatusget) | **GET** /sparr/status | Heart Beat Status Of Sparr Service|
|[**updateCourseCompletionStatusV1**](#updatecoursecompletionstatusv1) | **PUT** /v1/sparr/courses/{course_id}/assign/{user_id}/status | Update Course Completion Status|
|[**updateCourseV1**](#updatecoursev1) | **PUT** /v1/sparr/courses/{course_id} | Update Course|
|[**updateEvaluatorV1**](#updateevaluatorv1) | **PUT** /v1/sparr/evaluators/{params_id} | Update Evaluator|
|[**updateFeedbackV1**](#updatefeedbackv1) | **PUT** /v1/sparr/feedbacks/{feedback_id} | Update Feedback|
|[**updateGoalsV1**](#updategoalsv1) | **PUT** /v1/sparr/goals/{goals_id} | Update Goals|
|[**updatePersonaV1**](#updatepersonav1) | **PUT** /v1/sparr/personas/{persona_id} | Update Persona|
|[**updateScenarioV1**](#updatescenariov1) | **PUT** /v1/sparr/scenarios/{scenario_id} | Update Scenario|
|[**updateTrackerV1**](#updatetrackerv1) | **PUT** /v1/sparr/trackers/{tracker_id} | Update Tracker|
|[**uploadFilesV1**](#uploadfilesv1) | **POST** /v1/sparr/files/upload | Upload Files|

# **addModuleAttemptV1**
> UserModuleAttempt addModuleAttemptV1(userModuleAttemptCore)

Add a module attempt for a user

### Example

```typescript
import {
    SparrApi,
    Configuration,
    UserModuleAttemptCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let moduleId: string; // (default to undefined)
let userModuleAttemptCore: UserModuleAttemptCore; //

const { status, data } = await apiInstance.addModuleAttemptV1(
    moduleId,
    userModuleAttemptCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userModuleAttemptCore** | **UserModuleAttemptCore**|  | |
| **moduleId** | [**string**] |  | defaults to undefined|


### Return type

**UserModuleAttempt**

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

# **assignCourseV1**
> UserCourseAssignment assignCourseV1()

Assign a course to a user

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let courseId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.assignCourseV1(
    courseId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courseId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**UserCourseAssignment**

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

# **attachTagV1SparrEntityTagsEntityTypeEntityIdTagsPost**
> EntityTag attachTagV1SparrEntityTagsEntityTypeEntityIdTagsPost(tagCreate)

Attach a tag to an entity

### Example

```typescript
import {
    SparrApi,
    Configuration,
    TagCreate
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let entityType: string; // (default to undefined)
let entityId: string; // (default to undefined)
let tagCreate: TagCreate; //

const { status, data } = await apiInstance.attachTagV1SparrEntityTagsEntityTypeEntityIdTagsPost(
    entityType,
    entityId,
    tagCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagCreate** | **TagCreate**|  | |
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**EntityTag**

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

# **createCheckoutSessionForPriceV1**
> string createCheckoutSessionForPriceV1()

Create a checkout session for a price

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let priceId: string; // (default to undefined)

const { status, data } = await apiInstance.createCheckoutSessionForPriceV1(
    priceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **priceId** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **createCourseV1**
> CourseResponse createCourseV1(courseRequest)

Create a new course

### Example

```typescript
import {
    SparrApi,
    Configuration,
    CourseRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let courseRequest: CourseRequest; //

const { status, data } = await apiInstance.createCourseV1(
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

# **createCustomerPortalV1**
> string createCustomerPortalV1()

Create a customer portal for customer

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

const { status, data } = await apiInstance.createCustomerPortalV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

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

# **createFeedbackV1**
> Feedback createFeedbackV1(feedbackCore)

Create a new feedback

### Example

```typescript
import {
    SparrApi,
    Configuration,
    FeedbackCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let feedbackCore: FeedbackCore; //

const { status, data } = await apiInstance.createFeedbackV1(
    feedbackCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feedbackCore** | **FeedbackCore**|  | |


### Return type

**Feedback**

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

# **createGoalsV1**
> SparrDbModelsGoal createGoalsV1(goalCoreInput)

Create a new goals collection

### Example

```typescript
import {
    SparrApi,
    Configuration,
    GoalCoreInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let goalCoreInput: GoalCoreInput; //

const { status, data } = await apiInstance.createGoalsV1(
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

# **createPersonaV1**
> Persona createPersonaV1(personaCore)

Create a new persona

### Example

```typescript
import {
    SparrApi,
    Configuration,
    PersonaCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let personaCore: PersonaCore; //

const { status, data } = await apiInstance.createPersonaV1(
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

# **createPostCallEvaluationParamsV1**
> Evaluator createPostCallEvaluationParamsV1(evaluatorCore)

Create a new evaluator

### Example

```typescript
import {
    SparrApi,
    Configuration,
    EvaluatorCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let evaluatorCore: EvaluatorCore; //

const { status, data } = await apiInstance.createPostCallEvaluationParamsV1(
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

# **createScenarioV1**
> ScenarioResponse createScenarioV1(createScenarioRequest)

Create a new scenario

### Example

```typescript
import {
    SparrApi,
    Configuration,
    CreateScenarioRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let createScenarioRequest: CreateScenarioRequest; //

const { status, data } = await apiInstance.createScenarioV1(
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

# **createTrackerV1**
> Tracker createTrackerV1(trackerCore)

Create a new tracker

### Example

```typescript
import {
    SparrApi,
    Configuration,
    TrackerCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let trackerCore: TrackerCore; //

const { status, data } = await apiInstance.createTrackerV1(
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

# **deleteCourseV1**
> SparrModelsBaseBaseResponse deleteCourseV1()

Delete a course

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let courseId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCourseV1(
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

# **deleteEvaluatorV1**
> SparrModelsBaseBaseResponse deleteEvaluatorV1()

Delete evaluator

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let paramsId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteEvaluatorV1(
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

# **deleteFeedbackV1**
> SparrModelsBaseBaseResponse deleteFeedbackV1()

Delete a feedback

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let feedbackId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFeedbackV1(
    feedbackId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feedbackId** | [**string**] |  | defaults to undefined|


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

# **deleteFileV1**
> SparrModelsBaseBaseResponse deleteFileV1()

Delete a file

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let fileId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFileV1(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|


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

# **deleteGoalsV1**
> SparrModelsBaseBaseResponse deleteGoalsV1()

Delete a goals collection

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let goalsId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteGoalsV1(
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

# **deletePersonaV1**
> SparrModelsBaseBaseResponse deletePersonaV1()

Delete a persona

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let personaId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePersonaV1(
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

# **deleteScenarioV1**
> SparrModelsBaseBaseResponse deleteScenarioV1()

Delete a scenario

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let scenarioId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteScenarioV1(
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

# **deleteTrackerV1**
> SparrModelsBaseBaseResponse deleteTrackerV1()

Delete a tracker

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let trackerId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTrackerV1(
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

# **detachTagV1SparrEntityTagsEntityTypeEntityIdTagsTagNameDelete**
> SparrModelsBaseBaseResponse detachTagV1SparrEntityTagsEntityTypeEntityIdTagsTagNameDelete()

Detach a tag from an entity

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let entityType: string; // (default to undefined)
let entityId: string; // (default to undefined)
let tagName: string; // (default to undefined)

const { status, data } = await apiInstance.detachTagV1SparrEntityTagsEntityTypeEntityIdTagsTagNameDelete(
    entityType,
    entityId,
    tagName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|
| **tagName** | [**string**] |  | defaults to undefined|


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

# **generateEvaluatorV1**
> CombinedEvaluatorResponse generateEvaluatorV1(flexibleGenerationRequest)

Generate evaluator data from files and/or existing core components

### Example

```typescript
import {
    SparrApi,
    Configuration,
    FlexibleGenerationRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let flexibleGenerationRequest: FlexibleGenerationRequest; //

const { status, data } = await apiInstance.generateEvaluatorV1(
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

# **getCourseV1**
> CourseResponse getCourseV1()

Get a specific course by ID

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let courseId: string; // (default to undefined)

const { status, data } = await apiInstance.getCourseV1(
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

# **getCreditsV1**
> Array<Credit> getCreditsV1()

Get credits

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

const { status, data } = await apiInstance.getCreditsV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Credit>**

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

# **getEntitiesByTagV1SparrEntityTagsEntityTypeByTagTagNameGet**
> Array<EntityTag> getEntitiesByTagV1SparrEntityTagsEntityTypeByTagTagNameGet()

Get all entities of a type that have a specific tag

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let entityType: string; // (default to undefined)
let tagName: string; // (default to undefined)

const { status, data } = await apiInstance.getEntitiesByTagV1SparrEntityTagsEntityTypeByTagTagNameGet(
    entityType,
    tagName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | defaults to undefined|
| **tagName** | [**string**] |  | defaults to undefined|


### Return type

**Array<EntityTag>**

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

# **getEntityTagsV1SparrEntityTagsEntityTypeEntityIdTagsGet**
> Array<EntityTag> getEntityTagsV1SparrEntityTagsEntityTypeEntityIdTagsGet()

Get all tags for an entity

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let entityType: string; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.getEntityTagsV1SparrEntityTagsEntityTypeEntityIdTagsGet(
    entityType,
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**Array<EntityTag>**

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

# **getEvaluatorV1**
> Evaluator getEvaluatorV1()

Get a specific evaluator by ID that is either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let paramsId: string; // (default to undefined)

const { status, data } = await apiInstance.getEvaluatorV1(
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

# **getFeedbackV1**
> Feedback getFeedbackV1()

Get a specific feedback by ID

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let feedbackId: string; // (default to undefined)

const { status, data } = await apiInstance.getFeedbackV1(
    feedbackId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feedbackId** | [**string**] |  | defaults to undefined|


### Return type

**Feedback**

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

# **getFileV1**
> any getFileV1()

Get a specific file by ID

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let fileId: string; // (default to undefined)

const { status, data } = await apiInstance.getFileV1(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**any**

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

# **getGoalsV1**
> SparrDbModelsGoal getGoalsV1()

Get a specific goals collection by ID that is either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let goalsId: string; // (default to undefined)

const { status, data } = await apiInstance.getGoalsV1(
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

# **getMetricsV1**
> SparrModelsAnalyticsBatchMetricsResponse getMetricsV1(sparrModelsAnalyticsBatchMetricsRequests)

Get metrics for a given batch of metrics requests

### Example

```typescript
import {
    SparrApi,
    Configuration,
    SparrModelsAnalyticsBatchMetricsRequests
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let sparrModelsAnalyticsBatchMetricsRequests: SparrModelsAnalyticsBatchMetricsRequests; //

const { status, data } = await apiInstance.getMetricsV1(
    sparrModelsAnalyticsBatchMetricsRequests
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sparrModelsAnalyticsBatchMetricsRequests** | **SparrModelsAnalyticsBatchMetricsRequests**|  | |


### Return type

**SparrModelsAnalyticsBatchMetricsResponse**

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

# **getPersonaV1**
> Persona getPersonaV1()

Get a specific persona by ID that is either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let personaId: string; // (default to undefined)

const { status, data } = await apiInstance.getPersonaV1(
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

# **getPricingV1**
> Array<Price> getPricingV1()

Get pricing

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

const { status, data } = await apiInstance.getPricingV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Price>**

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

# **getScenarioV1**
> ScenarioResponse getScenarioV1()

Get a specific scenario by ID that is either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let scenarioId: string; // (default to undefined)

const { status, data } = await apiInstance.getScenarioV1(
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

# **getTrackerV1**
> Tracker getTrackerV1()

Get a specific tracker by ID that is either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let trackerId: string; // (default to undefined)

const { status, data } = await apiInstance.getTrackerV1(
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

# **getUserStatsV1**
> UserStats getUserStatsV1()

Search personas by name, title and company

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let userId: string; //User ID (default to undefined)

const { status, data } = await apiInstance.getUserStatsV1(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | User ID | defaults to undefined|


### Return type

**UserStats**

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

# **importLinkedinPersonaV1**
> Persona importLinkedinPersonaV1()

Import a persona from LinkedIn URL

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let linkedinUrl: string; // (default to undefined)

const { status, data } = await apiInstance.importLinkedinPersonaV1(
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

# **listCoursesV1**
> Array<CourseResponse> listCoursesV1()

Get all courses including reseller assignments

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let skip: number; //Skip for pagination (optional) (default to 0)
let limit: number; //Limit for pagination (optional) (default to 15)
let status: string; //Filter by status (optional) (default to undefined)

const { status, data } = await apiInstance.listCoursesV1(
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

# **listEvaluatorV1**
> Array<Evaluator> listEvaluatorV1()

Get all evaluator that are either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)

const { status, data } = await apiInstance.listEvaluatorV1(
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

# **listFeedbacksV1**
> Array<Feedback> listFeedbacksV1()

Get all feedbacks

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let skip: number; //Skip for pagination (optional) (default to 0)
let limit: number; //Limit for pagination (optional) (default to 15)
let fromDate: string; //Start date for filtering feedbacks (optional) (default to undefined)
let toDate: string; //End date for filtering feedbacks (optional) (default to undefined)
let userFilter: string; //User filter for filtering feedbacks. Comma separated list of user ids. (optional) (default to undefined)
let statusFilter: string; //Status filter for filtering feedbacks. Comma separated list of statuses. (optional) (default to undefined)
let scenarioFilter: string; //Scenario filter for filtering feedbacks. Comma separated list of scenario ids. (optional) (default to undefined)

const { status, data } = await apiInstance.listFeedbacksV1(
    skip,
    limit,
    fromDate,
    toDate,
    userFilter,
    statusFilter,
    scenarioFilter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skip** | [**number**] | Skip for pagination | (optional) defaults to 0|
| **limit** | [**number**] | Limit for pagination | (optional) defaults to 15|
| **fromDate** | [**string**] | Start date for filtering feedbacks | (optional) defaults to undefined|
| **toDate** | [**string**] | End date for filtering feedbacks | (optional) defaults to undefined|
| **userFilter** | [**string**] | User filter for filtering feedbacks. Comma separated list of user ids. | (optional) defaults to undefined|
| **statusFilter** | [**string**] | Status filter for filtering feedbacks. Comma separated list of statuses. | (optional) defaults to undefined|
| **scenarioFilter** | [**string**] | Scenario filter for filtering feedbacks. Comma separated list of scenario ids. | (optional) defaults to undefined|


### Return type

**Array<Feedback>**

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

# **listGoalsV1**
> Array<SparrDbModelsGoal> listGoalsV1()

Get all goals that are either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)

const { status, data } = await apiInstance.listGoalsV1(
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

# **listPersonasV1**
> Array<Persona> listPersonasV1()

Get all personas that are either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)
let tags: string; //Filter personas by tag, comma separated names (optional) (default to undefined)

const { status, data } = await apiInstance.listPersonasV1(
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

# **listScenariosV1**
> Array<ScenarioResponse> listScenariosV1()

Get all scenarios that are either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)
let tags: string; //Filter scenarios by tag, comma separated names (optional) (default to undefined)

const { status, data } = await apiInstance.listScenariosV1(
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

# **listTrackerV1**
> Array<Tracker> listTrackerV1()

Get all trackers that are either directly owned or available through reseller course assignments

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 100)

const { status, data } = await apiInstance.listTrackerV1(
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

# **listUserAssignmentsV1**
> Array<UserCourseAssignmentAnalyticsResponse> listUserAssignmentsV1()

Get all course assignments for a user with analytics

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.listUserAssignmentsV1(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**Array<UserCourseAssignmentAnalyticsResponse>**

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

# **listUserCourseAttemptsV1**
> Array<UserModuleAttemptResponse> listUserCourseAttemptsV1()

Get all module attempts with module information for a user in a specific course

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let courseId: string; // (default to undefined)
let userId: string; // (default to undefined)
let skip: number; //Skip for pagination (optional) (default to 0)
let limit: number; //Limit for pagination (optional) (default to 15)

const { status, data } = await apiInstance.listUserCourseAttemptsV1(
    courseId,
    userId,
    skip,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courseId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|
| **skip** | [**number**] | Skip for pagination | (optional) defaults to 0|
| **limit** | [**number**] | Limit for pagination | (optional) defaults to 15|


### Return type

**Array<UserModuleAttemptResponse>**

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

# **listUserModuleAttemptsV1**
> Array<UserModuleAttemptResponse> listUserModuleAttemptsV1()

Get all module attempts for a user

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let moduleId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.listUserModuleAttemptsV1(
    moduleId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moduleId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**Array<UserModuleAttemptResponse>**

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

# **revokeCourseV1**
> SparrModelsBaseBaseResponse revokeCourseV1()

Revoke a course from a user

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let courseId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.revokeCourseV1(
    courseId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courseId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


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

# **searchGoalsV1**
> GoalsSearchResponse searchGoalsV1()

Search goals by name and description

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let query: string; //Search query string (default to undefined)
let page: number; //Page number (optional) (default to 1)
let size: number; //Items per page (optional) (default to 10)

const { status, data } = await apiInstance.searchGoalsV1(
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

# **searchPersonasV1**
> PersonaSearchResponse searchPersonasV1()

Search personas by name, title and company

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let query: string; //Search query string (default to undefined)
let page: number; //Page number (optional) (default to 1)
let size: number; //Items per page (optional) (default to 10)

const { status, data } = await apiInstance.searchPersonasV1(
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

# **searchScenariosV1**
> ScenarioSearchResponse searchScenariosV1()

Search scenarios by name and description

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let query: string; //Search query string (default to undefined)
let page: number; //Page number (optional) (default to 1)
let size: number; //Items per page (optional) (default to 10)

const { status, data } = await apiInstance.searchScenariosV1(
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

# **searchTrackerV1**
> TrackerSearchResponse searchTrackerV1()

Search trackers by name and description

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let query: string; //Search query string (default to undefined)
let page: number; //Page number (optional) (default to 1)
let size: number; //Items per page (optional) (default to 10)

const { status, data } = await apiInstance.searchTrackerV1(
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

# **statusSparrStatusGet**
> object statusSparrStatusGet()

Heart Beat check to check the health of Sparr Service

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

const { status, data } = await apiInstance.statusSparrStatusGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sparr Service is healthy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCourseCompletionStatusV1**
> UserCourseAssignment updateCourseCompletionStatusV1()

Update course completion status

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let courseId: string; // (default to undefined)
let userId: string; // (default to undefined)
let completionStatus: CourseCompletionStatus; // (default to undefined)

const { status, data } = await apiInstance.updateCourseCompletionStatusV1(
    courseId,
    userId,
    completionStatus
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courseId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|
| **completionStatus** | **CourseCompletionStatus** |  | defaults to undefined|


### Return type

**UserCourseAssignment**

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

# **updateCourseV1**
> CourseResponse updateCourseV1(courseUpdateRequest)

Update a course

### Example

```typescript
import {
    SparrApi,
    Configuration,
    CourseUpdateRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let courseId: string; // (default to undefined)
let courseUpdateRequest: CourseUpdateRequest; //

const { status, data } = await apiInstance.updateCourseV1(
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

# **updateEvaluatorV1**
> Evaluator updateEvaluatorV1(evaluatorCore)

Update evaluator

### Example

```typescript
import {
    SparrApi,
    Configuration,
    EvaluatorCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let paramsId: string; // (default to undefined)
let evaluatorCore: EvaluatorCore; //

const { status, data } = await apiInstance.updateEvaluatorV1(
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

# **updateFeedbackV1**
> Feedback updateFeedbackV1(feedbackCore)

Update a feedback

### Example

```typescript
import {
    SparrApi,
    Configuration,
    FeedbackCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let feedbackId: string; // (default to undefined)
let feedbackCore: FeedbackCore; //

const { status, data } = await apiInstance.updateFeedbackV1(
    feedbackId,
    feedbackCore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feedbackCore** | **FeedbackCore**|  | |
| **feedbackId** | [**string**] |  | defaults to undefined|


### Return type

**Feedback**

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

# **updateGoalsV1**
> SparrDbModelsGoal updateGoalsV1(goalCoreInput)

Update a goals collection

### Example

```typescript
import {
    SparrApi,
    Configuration,
    GoalCoreInput
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let goalsId: string; // (default to undefined)
let goalCoreInput: GoalCoreInput; //

const { status, data } = await apiInstance.updateGoalsV1(
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

# **updatePersonaV1**
> Persona updatePersonaV1(personaCore)

Update a persona

### Example

```typescript
import {
    SparrApi,
    Configuration,
    PersonaCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let personaId: string; // (default to undefined)
let personaCore: PersonaCore; //

const { status, data } = await apiInstance.updatePersonaV1(
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

# **updateScenarioV1**
> ScenarioResponse updateScenarioV1(createScenarioRequest)

Update a scenario

### Example

```typescript
import {
    SparrApi,
    Configuration,
    CreateScenarioRequest
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let scenarioId: string; // (default to undefined)
let createScenarioRequest: CreateScenarioRequest; //

const { status, data } = await apiInstance.updateScenarioV1(
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

# **updateTrackerV1**
> Tracker updateTrackerV1(trackerCore)

Update a tracker

### Example

```typescript
import {
    SparrApi,
    Configuration,
    TrackerCore
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let trackerId: string; // (default to undefined)
let trackerCore: TrackerCore; //

const { status, data } = await apiInstance.updateTrackerV1(
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

# **uploadFilesV1**
> Array<any> uploadFilesV1()

Upload multiple files and create file records. Maximum 5 files per request, each file max 10MB.

### Example

```typescript
import {
    SparrApi,
    Configuration
} from '@trata/ts-client-sdk';

const configuration = new Configuration();
const apiInstance = new SparrApi(configuration);

let files: Array<File>; // (default to undefined)

const { status, data } = await apiInstance.uploadFilesV1(
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **files** | **Array&lt;File&gt;** |  | defaults to undefined|


### Return type

**Array<any>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Not found |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

