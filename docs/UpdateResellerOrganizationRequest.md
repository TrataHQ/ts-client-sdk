# UpdateResellerOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**address** | [**AddressInput**](AddressInput.md) |  | [optional] [default to undefined]
**tax** | [**TaxDetailsInput**](TaxDetailsInput.md) |  | [optional] [default to undefined]
**billingEmailAddress** | **string** |  | [optional] [default to undefined]
**websiteUrl** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateResellerOrganizationRequest } from '@trata/ts-client-sdk';

const instance: UpdateResellerOrganizationRequest = {
    name,
    address,
    tax,
    billingEmailAddress,
    websiteUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
