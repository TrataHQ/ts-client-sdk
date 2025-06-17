# ModuleUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the module | [default to undefined]
**description** | **string** | The description of the module | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**difficultyLevel** | **string** | The difficulty level of the module | [default to undefined]
**personaId** | **string** | The ID of the persona | [default to undefined]
**personaName** | **string** |  | [default to undefined]
**scenarioId** | **string** | The ID of the scenario | [default to undefined]
**scenarioName** | **string** |  | [default to undefined]
**passingScorePercentage** | **number** | The expected completion score of the module out of 100 | [default to undefined]
**id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ModuleUpdateRequest } from '@trata/ts-client-sdk';

const instance: ModuleUpdateRequest = {
    name,
    description,
    tags,
    difficultyLevel,
    personaId,
    personaName,
    scenarioId,
    scenarioName,
    passingScorePercentage,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
