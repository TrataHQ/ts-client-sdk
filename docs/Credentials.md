# Credentials

OAuth or API key authentication configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentialsType** | **string** | Credential type identifier | [optional] [default to 'noauth']
**code** | **string** |  | [optional] [default to undefined]
**accessToken** | **string** |  | [optional] [default to undefined]
**refreshToken** | **string** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [optional] [default to undefined]
**apiKey** | **string** | The API key for the app | [default to undefined]
**username** | **string** | The username for the app | [default to undefined]
**password** | **string** | The password for the app | [default to undefined]

## Example

```typescript
import { Credentials } from '@trata/ts-client-sdk';

const instance: Credentials = {
    credentialsType,
    code,
    accessToken,
    refreshToken,
    expiresAt,
    apiKey,
    username,
    password,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
