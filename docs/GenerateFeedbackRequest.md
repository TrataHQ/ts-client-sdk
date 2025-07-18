# GenerateFeedbackRequest

Request model for generating feedback from call recording and user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**call_recording** | [**CallRecording**](CallRecording.md) |  | [default to undefined]
**user** | [**UserData**](UserData.md) |  | [default to undefined]
**idempotency_key** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GenerateFeedbackRequest } from '@trata/ts-client-sdk';

const instance: GenerateFeedbackRequest = {
    call_recording,
    user,
    idempotency_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
