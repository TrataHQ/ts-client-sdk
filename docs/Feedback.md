# Feedback

Feedback represents a feedback that can be given to a persona

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**userId** | **string** | The ID of the user who made the call | [default to undefined]
**userName** | **string** |  | [default to undefined]
**userProfilePictureUrl** | **string** |  | [optional] [default to undefined]
**aiAgentId** | **string** |  | [default to undefined]
**scenarioId** | **string** | The ID of the scenario | [default to undefined]
**scenarioName** | **string** |  | [default to undefined]
**personaId** | **string** | The ID of the persona | [default to undefined]
**personaName** | **string** |  | [default to undefined]
**startTimestamp** | **string** | The start timestamp of the conversation | [default to undefined]
**endTimestamp** | **string** | The end timestamp of the conversation | [default to undefined]
**startSparringAt** | **number** | The time in seconds when sparring started | [optional] [default to -1]
**endSparringAt** | **number** | The time in seconds when sparring ended | [optional] [default to -1]
**topInsights** | **Array&lt;string&gt;** | The top insights from the conversation | [default to undefined]
**recordingUrl** | **string** | The URL of the recording of the conversation | [default to undefined]
**transcript** | [**Array&lt;SparrDialogLine&gt;**](SparrDialogLine.md) | The transcript of the conversation | [default to undefined]
**completeTranscript** | [**Array&lt;SparrDialogLine&gt;**](SparrDialogLine.md) |  | [optional] [default to undefined]
**transcriptWithTimestamp** | [**Array&lt;SparrDialogLineWithTimestamp&gt;**](SparrDialogLineWithTimestamp.md) |  | [optional] [default to undefined]
**analytics** | [**AnalyticsModelOutput**](AnalyticsModelOutput.md) | The analytics of the conversation | [default to undefined]
**overallScore** | **number** | The overall score of the conversation out of 100 based on the weightage of each goal | [default to undefined]
**status** | **string** | The status of the feedback | [optional] [default to 'active']
**id** | **string** | The unique identifier of the feedback | [optional] [default to undefined]
**version** | **number** | The version of the feedback | [optional] [default to 1]

## Example

```typescript
import { Feedback } from '@trata/ts-client-sdk';

const instance: Feedback = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    userId,
    userName,
    userProfilePictureUrl,
    aiAgentId,
    scenarioId,
    scenarioName,
    personaId,
    personaName,
    startTimestamp,
    endTimestamp,
    startSparringAt,
    endSparringAt,
    topInsights,
    recordingUrl,
    transcript,
    completeTranscript,
    transcriptWithTimestamp,
    analytics,
    overallScore,
    status,
    id,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
