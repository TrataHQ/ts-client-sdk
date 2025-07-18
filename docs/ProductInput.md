# ProductInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Product is active or not | [default to undefined]
**defaultPrice** | **number** | Default price of the product this is represented in the lowest currency denomination. Eg: 1000 for $10 | [default to undefined]
**currency** | **string** | Currency of the product | [default to undefined]
**description** | **string** | Description of the product | [default to undefined]
**name** | **string** | Name of the product | [default to undefined]
**shippable** | **boolean** | Product is shippable or not. Service is not shippable | [optional] [default to false]
**features** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**scheduleAppointment** | **boolean** | Product requires appointment scheduling or not | [optional] [default to false]
**props** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**tags** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**status** | [**Status**](Status.md) |  | [default to undefined]
**agentIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ProductInput } from '@trata/ts-client-sdk';

const instance: ProductInput = {
    active,
    defaultPrice,
    currency,
    description,
    name,
    shippable,
    features,
    scheduleAppointment,
    props,
    tags,
    status,
    agentIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
