# PricingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priceName** | **string** | Price name | [default to undefined]
**description** | **string** | Description | [default to undefined]
**currency** | **string** | Currency | [default to undefined]
**priceInterval** | [**PriceInterval**](PriceInterval.md) | Price interval | [default to undefined]
**priceItems** | [**Array&lt;PriceItem&gt;**](PriceItem.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PricingRequest } from '@trata/ts-client-sdk';

const instance: PricingRequest = {
    priceName,
    description,
    currency,
    priceInterval,
    priceItems,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
