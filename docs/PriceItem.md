# PriceItem

Price item details for a price tier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the price item | [optional] [default to undefined]
**description** | **string** | Description of the price item | [optional] [default to undefined]
**quantity** | **number** |  | [optional] [default to undefined]
**pricePerQuantity** | **number** |  | [optional] [default to undefined]
**creditType** | [**CreditTypeEnum**](CreditTypeEnum.md) | Type of the credit | [optional] [default to undefined]

## Example

```typescript
import { PriceItem } from '@trata/ts-client-sdk';

const instance: PriceItem = {
    name,
    description,
    quantity,
    pricePerQuantity,
    creditType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
