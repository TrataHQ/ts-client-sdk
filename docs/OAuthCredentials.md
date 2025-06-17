# OAuthCredentials


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentialsType** | **string** | Credential type identifier | [optional] [default to CredentialsTypeEnum_Oauth]
**code** | **string** |  | [optional] [default to undefined]
**accessToken** | **string** |  | [optional] [default to undefined]
**refreshToken** | **string** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OAuthCredentials } from '@trata/ts-client-sdk';

const instance: OAuthCredentials = {
    credentialsType,
    code,
    accessToken,
    refreshToken,
    expiresAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
