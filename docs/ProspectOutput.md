# ProspectOutput

Prospects are the potential customers for business

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**phoneNumber** | **string** |  | [optional] [default to undefined]
**externalReference** | [**Array&lt;ExternalReference&gt;**](ExternalReference.md) |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**prospectProps** | **{ [key: string]: any; }** |  | [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ProspectOutput } from '@trata/ts-client-sdk';

const instance: ProspectOutput = {
    id,
    orgId,
    name,
    email,
    phoneNumber,
    externalReference,
    status,
    prospectProps,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
