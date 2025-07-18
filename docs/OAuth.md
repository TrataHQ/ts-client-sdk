# OAuth

OAuth authentication configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authType** | **string** | The type of authentication | [optional] [default to 'oauth']
**clientId** | **string** | The client ID for the OAuth app | [default to undefined]
**clientSecret** | **string** | The client secret for the OAuth app | [default to undefined]
**redirectUri** | **string** | The redirect URI for the OAuth app | [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**authUrl** | **string** | The authorization URL for the OAuth app | [default to undefined]
**tokenUrl** | **string** | The token URL for the OAuth app | [default to undefined]

## Example

```typescript
import { OAuth } from '@trata/ts-client-sdk';

const instance: OAuth = {
    authType,
    clientId,
    clientSecret,
    redirectUri,
    scopes,
    authUrl,
    tokenUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
