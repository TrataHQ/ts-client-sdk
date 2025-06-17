# UserPayload

Payload for creating a new user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [optional] [default to undefined]
**role** | [**Role**](Role.md) |  | [optional] [default to undefined]
**fullName** | **string** |  | [optional] [default to undefined]
**phoneNumber** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UserPayload } from '@trata/ts-client-sdk';

const instance: UserPayload = {
    email,
    role,
    fullName,
    phoneNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
