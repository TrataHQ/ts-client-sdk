# ConversationAnalyticsModelInput

Expected output of the post conversation task

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**summary** | **string** |  | [default to undefined]
**action_items** | **Array&lt;string&gt;** |  | [default to undefined]
**is_audio_consent_given** | **boolean** | If the user has given consent to store the audio of the conversation. Unless the user explicitly says yes, this should be false. | [default to undefined]
**email_address_of_caller** | **string** |  | [default to undefined]
**name_of_caller** | **string** |  | [default to undefined]
**phone_number_of_caller** | **string** |  | [default to undefined]
**address_of_caller** | **string** |  | [default to undefined]
**sentiment_of_caller** | [**CallSentiment**](CallSentiment.md) | Sentiment of the caller based on the conversation details. | [default to undefined]
**prospectStatus** | [**ProspectStatus**](ProspectStatus.md) |  | [default to undefined]

## Example

```typescript
import { ConversationAnalyticsModelInput } from '@trata/ts-client-sdk';

const instance: ConversationAnalyticsModelInput = {
    summary,
    action_items,
    is_audio_consent_given,
    email_address_of_caller,
    name_of_caller,
    phone_number_of_caller,
    address_of_caller,
    sentiment_of_caller,
    prospectStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
