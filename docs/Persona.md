# Persona

Persona represents a persona that can be used in a scenario

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**name** | **string** | The name of the persona | [default to undefined]
**title** | **string** | The title of the persona | [default to undefined]
**context** | **string** | The context of the persona | [default to undefined]
**voice** | [**SparrVoiceOutput**](SparrVoiceOutput.md) |  | [default to undefined]
**demeanor** | [**SparrDemeanorOutput**](SparrDemeanorOutput.md) |  | [default to undefined]
**additionalBackground** | **string** | The additional background of the persona | [default to undefined]
**workHistory** | [**Array&lt;SparrWorkDetails&gt;**](SparrWorkDetails.md) | The work history of the persona | [default to undefined]
**linkedInUrl** | **string** | The LinkedIn URL of the persona | [default to undefined]
**twitterUrl** | **string** |  | [default to undefined]
**blogUrl** | **string** |  | [default to undefined]
**isInherited** | **boolean** | Whether the persona is inherited from the parent persona | [optional] [default to false]
**profilePictureUrl** | **string** |  | [default to undefined]
**communicationStyle** | **string** | The communication style of the persona | [optional] [default to 'balanced']
**status** | **string** | The status of the persona | [optional] [default to 'active']
**id** | **string** | The unique identifier of the persona | [optional] [default to undefined]
**version** | **number** | The version of the persona | [optional] [default to 1]

## Example

```typescript
import { Persona } from '@trata/ts-client-sdk';

const instance: Persona = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    name,
    title,
    context,
    voice,
    demeanor,
    additionalBackground,
    workHistory,
    linkedInUrl,
    twitterUrl,
    blogUrl,
    isInherited,
    profilePictureUrl,
    communicationStyle,
    status,
    id,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
