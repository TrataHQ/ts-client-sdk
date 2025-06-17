# OrganizationOutput

Organization represents the business using Trata and all users are associated to this business entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**config** | [**AgentConfig**](AgentConfig.md) |  | [default to undefined]
**address** | [**AddressOutput**](AddressOutput.md) |  | [default to undefined]
**tax** | [**TaxDetailsOutput**](TaxDetailsOutput.md) |  | [default to undefined]
**isActiveSubscription** | **boolean** |  | [optional] [default to false]
**billingEmailAddress** | **string** |  | [optional] [default to undefined]
**websiteUrl** | **string** |  | [optional] [default to undefined]
**externalReferenceIds** | [**Array&lt;ExternalServiceProviderOutput&gt;**](ExternalServiceProviderOutput.md) |  | [default to undefined]
**isInitialized** | [**OrganizationInitializationStatus**](OrganizationInitializationStatus.md) |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**internalProps** | **object** |  | [default to undefined]
**adminProps** | **object** |  | [default to undefined]
**parentOrgId** | **string** | If the Organization is created by reseller, this field will have the reseller org id as the parent organization id | [optional] [default to undefined]
**orgType** | **string** |  | [optional] [default to undefined]
**app** | [**AppEnumOutput**](AppEnumOutput.md) |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to 'active']
**additionalInfo** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrganizationOutput } from '@trata/ts-client-sdk';

const instance: OrganizationOutput = {
    id,
    name,
    config,
    address,
    tax,
    isActiveSubscription,
    billingEmailAddress,
    websiteUrl,
    externalReferenceIds,
    isInitialized,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    internalProps,
    adminProps,
    parentOrgId,
    orgType,
    app,
    status,
    additionalInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
