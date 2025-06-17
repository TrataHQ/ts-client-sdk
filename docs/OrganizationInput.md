# OrganizationInput

Organization represents the business using Trata and all users are associated to this business entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the organization | [default to undefined]
**address** | [**AddressInput**](AddressInput.md) |  | [optional] [default to undefined]
**tax** | [**TaxDetailsInput**](TaxDetailsInput.md) |  | [optional] [default to undefined]
**externalReferenceIds** | [**Array&lt;ExternalServiceProviderInput&gt;**](ExternalServiceProviderInput.md) |  | [optional] [default to undefined]
**billingEmailAddress** | **string** |  | [optional] [default to undefined]
**websiteUrl** | **string** |  | [optional] [default to undefined]
**agentConfig** | [**AgentConfig**](AgentConfig.md) |  | [optional] [default to undefined]
**app** | [**AppEnumInput**](AppEnumInput.md) |  | [optional] [default to undefined]
**orgType** | **string** |  | [optional] [default to undefined]
**additionalInfo** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrganizationInput } from '@trata/ts-client-sdk';

const instance: OrganizationInput = {
    name,
    address,
    tax,
    externalReferenceIds,
    billingEmailAddress,
    websiteUrl,
    agentConfig,
    app,
    orgType,
    additionalInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
