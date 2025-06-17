# AppEntity

App DTO Model filled by user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the app | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**endpointUrl** | **string** |  | [optional] [default to undefined]
**logoUrl** | **string** |  | [optional] [default to undefined]
**auth** | [**Array&lt;AuthInner&gt;**](AuthInner.md) | Authentication configuration for the app | [default to undefined]
**version** | **string** | The version of the app | [optional] [default to undefined]
**actions** | [**Array&lt;AppActionEntity&gt;**](AppActionEntity.md) | Array of available actions with their configurations | [default to undefined]

## Example

```typescript
import { AppEntity } from '@trata/ts-client-sdk';

const instance: AppEntity = {
    name,
    description,
    endpointUrl,
    logoUrl,
    auth,
    version,
    actions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
