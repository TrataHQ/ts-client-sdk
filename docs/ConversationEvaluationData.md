# ConversationEvaluationData

Model which stores the result of the evaluation metric for a conversation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the evaluation metric | [optional] [default to undefined]
**description** | **string** | Description about the evaluation metric | [optional] [default to undefined]
**value** | **string** | Value of the evaluation metric | [optional] [default to undefined]

## Example

```typescript
import { ConversationEvaluationData } from '@trata/ts-client-sdk';

const instance: ConversationEvaluationData = {
    name,
    description,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
