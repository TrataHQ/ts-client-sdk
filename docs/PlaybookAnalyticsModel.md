# PlaybookAnalyticsModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the playbook step | [default to undefined]
**description** | **string** | Description of the playbook step | [default to undefined]
**covered** | **boolean** | Whether the playbook step was covered in the conversation | [default to undefined]
**user_dialogue** | **string** | Dialogue of the user in the conversation | [default to undefined]
**feedback** | **string** |  | [optional] [default to undefined]
**suggestions** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PlaybookAnalyticsModel } from '@trata/ts-client-sdk';

const instance: PlaybookAnalyticsModel = {
    name,
    description,
    covered,
    user_dialogue,
    feedback,
    suggestions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
