# TelephonyConnectResponse

Response model for OAuth connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Whether the connection was successful | [default to undefined]
**message** | **string** | Response message | [default to undefined]
**connection_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TelephonyConnectResponse } from '@trata/ts-client-sdk';

const instance: TelephonyConnectResponse = {
    success,
    message,
    connection_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
