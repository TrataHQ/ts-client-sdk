# Price

Price tier details of the business

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**parentOrgId** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**priceName** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**isDefault** | **boolean** |  | [optional] [default to undefined]
**currency** | **string** | Currency of the price, e.g. USD, INR, EUR, GBP, etc. | [optional] [default to undefined]
**stripePriceId** | **string** |  | [optional] [default to undefined]
**stripeProductId** | **string** |  | [optional] [default to undefined]
**priceInterval** | [**PriceInterval**](PriceInterval.md) |  | [optional] [default to undefined]
**priceItems** | [**Array&lt;PriceItem&gt;**](PriceItem.md) |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Price } from '@trata/ts-client-sdk';

const instance: Price = {
    id,
    parentOrgId,
    orgId,
    priceName,
    description,
    isDefault,
    currency,
    stripePriceId,
    stripeProductId,
    priceInterval,
    priceItems,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
