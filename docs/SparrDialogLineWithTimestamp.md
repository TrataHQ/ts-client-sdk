# SparrDialogLineWithTimestamp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**speaker** | **string** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**message_id** | **string** |  | [default to undefined]
**start_at_milliseconds** | **number** |  | [default to undefined]
**end_at_milliseconds** | **number** |  | [default to undefined]
**words** | [**Array&lt;DialogWordWithTimestamp&gt;**](DialogWordWithTimestamp.md) |  | [default to undefined]

## Example

```typescript
import { SparrDialogLineWithTimestamp } from '@trata/ts-client-sdk';

const instance: SparrDialogLineWithTimestamp = {
    speaker,
    message,
    message_id,
    start_at_milliseconds,
    end_at_milliseconds,
    words,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
