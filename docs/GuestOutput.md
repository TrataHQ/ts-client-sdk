# GuestOutput

Guest users who are not verified by Trata yet. They will not be able to use Trata until they are verified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**role** | **string** |  | [optional] [default to undefined]
**isEmailVerified** | **boolean** |  | [optional] [default to false]
**last_sent_date** | **string** |  | [optional] [default to undefined]
**guestInviteCode** | **string** |  | [optional] [default to undefined]
**sent_count** | **number** |  | [optional] [default to 0]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GuestOutput } from '@trata/ts-client-sdk';

const instance: GuestOutput = {
    id,
    email,
    orgId,
    role,
    isEmailVerified,
    last_sent_date,
    guestInviteCode,
    sent_count,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
