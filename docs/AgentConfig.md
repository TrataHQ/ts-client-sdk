# AgentConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transcriber** | [**TranscriberConfig**](TranscriberConfig.md) |  | [default to undefined]
**intelligenceProvider** | [**IntelligenceProviderConfig**](IntelligenceProviderConfig.md) |  | [default to undefined]
**synthesizer** | [**SynthesizerConfig**](SynthesizerConfig.md) |  | [default to undefined]
**embeddingsModelConfig** | [**EmbeddingsModelConfig**](EmbeddingsModelConfig.md) |  | [default to undefined]
**hiveStorageConfig** | [**HiveStorageConfig**](HiveStorageConfig.md) |  | [default to undefined]
**fillersConfig** | [**FillersConfig**](FillersConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AgentConfig } from '@trata/ts-client-sdk';

const instance: AgentConfig = {
    transcriber,
    intelligenceProvider,
    synthesizer,
    embeddingsModelConfig,
    hiveStorageConfig,
    fillersConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
