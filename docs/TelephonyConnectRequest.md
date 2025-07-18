# TelephonyConnectRequest

Request model for OAuth connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | OAuth authorization code from the provider | [default to undefined]
**appName** | [**TelephonyApp**](TelephonyApp.md) |  | [default to undefined]

## Example

```typescript
import { TelephonyConnectRequest } from '@trata/ts-client-sdk';

const instance: TelephonyConnectRequest = {
    code,
    appName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
