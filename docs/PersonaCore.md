# PersonaCore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the persona | [default to undefined]
**title** | **string** | The title of the persona | [default to undefined]
**context** | **string** | The context of the persona | [default to undefined]
**voice** | [**SparrVoiceInput**](SparrVoiceInput.md) |  | [default to undefined]
**demeanor** | [**SparrDemeanorInput**](SparrDemeanorInput.md) |  | [default to undefined]
**additionalBackground** | **string** | The additional background of the persona | [default to undefined]
**workHistory** | [**Array&lt;SparrWorkDetails&gt;**](SparrWorkDetails.md) | The work history of the persona | [default to undefined]
**linkedInUrl** | **string** | The LinkedIn URL of the persona | [default to undefined]
**twitterUrl** | **string** |  | [default to undefined]
**blogUrl** | **string** |  | [default to undefined]
**isInherited** | **boolean** | Whether the persona is inherited from the parent persona | [optional] [default to false]
**profilePictureUrl** | **string** |  | [default to undefined]
**communicationStyle** | **string** | The communication style of the persona | [optional] [default to 'balanced']
**status** | **string** | The status of the persona | [optional] [default to 'active']

## Example

```typescript
import { PersonaCore } from '@trata/ts-client-sdk';

const instance: PersonaCore = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
