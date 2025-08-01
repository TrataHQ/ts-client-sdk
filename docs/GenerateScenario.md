# GenerateScenario

Request model for generating a scenario

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scenario** | [**ScenarioInput**](ScenarioInput.md) |  | [optional] [default to undefined]
**prompt** | **string** |  | [optional] [default to undefined]
**prompt_files** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**prompt_audio_files** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { GenerateScenario } from '@trata/ts-client-sdk';

const instance: GenerateScenario = {
    scenario,
    prompt,
    prompt_files,
    prompt_audio_files,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
