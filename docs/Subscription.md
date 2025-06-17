# Subscription

Subscription details of the business

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parentOrgId** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**subscriptionTypeName** | **string** |  | [optional] [default to undefined]
**planName** | **string** |  | [optional] [default to undefined]
**priceId** | **string** |  | [optional] [default to undefined]
**stripeSubscriptionId** | **string** |  | [optional] [default to undefined]
**billingCycleStartDate** | **number** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**nextRenewalDate** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Subscription } from '@trata/ts-client-sdk';

const instance: Subscription = {
    parentOrgId,
    orgId,
    subscriptionTypeName,
    planName,
    priceId,
    stripeSubscriptionId,
    billingCycleStartDate,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    nextRenewalDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
