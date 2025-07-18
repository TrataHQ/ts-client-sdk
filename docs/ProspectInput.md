# ProspectInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**phoneNumber** | **string** |  | [optional] [default to undefined]
**externalReference** | [**Array&lt;ExternalReference&gt;**](ExternalReference.md) |  | [optional] [default to undefined]
**status** | [**ProspectStatus**](ProspectStatus.md) |  | [default to undefined]
**prospectProps** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { ProspectInput } from '@trata/ts-client-sdk';

const instance: ProspectInput = {
    name,
    email,
    phoneNumber,
    externalReference,
    status,
    prospectProps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
