# UserApiKeyLink

User id to api key mapping table

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**secretKey** | **string** |  | [optional] [default to undefined]
**keyType** | **string** |  | [optional] [default to 'api_key']
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { UserApiKeyLink } from '@trata/ts-client-sdk';

const instance: UserApiKeyLink = {
    id,
    orgId,
    userId,
    secretKey,
    keyType,
    createdBy,
    createdAt,
    expiresAt,
    isActive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
