# LiveFeedbackProps

The properties of the live feedback

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**speaker_label** | **string** |  | [default to undefined]
**contact_name** | **string** |  | [default to undefined]
**is_scenario_ai_guessed** | **boolean** | Whether the conversation was guessed by the scenario | [optional] [default to true]
**is_speaker_label_ai_guessed** | **boolean** | Whether the conversation was guessed by the speaker label | [optional] [default to true]

## Example

```typescript
import { LiveFeedbackProps } from '@trata/ts-client-sdk';

const instance: LiveFeedbackProps = {
    speaker_label,
    contact_name,
    is_scenario_ai_guessed,
    is_speaker_label_ai_guessed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
