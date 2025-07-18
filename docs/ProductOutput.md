# ProductOutput

Product and services offered by the business

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**active** | **boolean** | Product is active or not | [optional] [default to false]
**defaultPrice** | **number** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**name** | **string** | Name of the product | [optional] [default to undefined]
**shippable** | **boolean** | Product is shippable or not. Service is not shippable | [optional] [default to false]
**features** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**scheduleAppointment** | **boolean** | Product requires appointment scheduling or not | [optional] [default to false]
**props** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**tags** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ProductOutput } from '@trata/ts-client-sdk';

const instance: ProductOutput = {
    id,
    orgId,
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
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
