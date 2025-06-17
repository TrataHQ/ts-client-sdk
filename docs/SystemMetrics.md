# SystemMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_sentiment** | **string** |  | [default to undefined]
**filler_words** | [**FillerWords**](FillerWords.md) |  | [default to undefined]
**longest_monologue** | [**LongestMonologue**](LongestMonologue.md) |  | [default to undefined]
**speech_pace** | **number** |  | [default to undefined]
**user_talk_ratio** | **number** |  | [optional] [default to undefined]
**dialog_lines_sentiment** | [**Array&lt;SparrDialogLineWithSentiment&gt;**](SparrDialogLineWithSentiment.md) |  | [default to undefined]

## Example

```typescript
import { SystemMetrics } from '@trata/ts-client-sdk';

const instance: SystemMetrics = {
    average_sentiment,
    filler_words,
    longest_monologue,
    speech_pace,
    user_talk_ratio,
    dialog_lines_sentiment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
