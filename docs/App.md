# App

App represents an integration that can be connected to perform actions and triggers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**name** | **string** | The name of the app | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**endpointUrl** | **string** |  | [optional] [default to undefined]
**logoUrl** | **string** |  | [optional] [default to undefined]
**auth** | [**Array&lt;AuthInner&gt;**](AuthInner.md) | Authentication configuration for the app | [default to undefined]
**version** | **string** | The version of the app | [optional] [default to undefined]
**id** | **string** | The unique identifier of the app | [optional] [default to undefined]

## Example

```typescript
import { App } from '@trata/ts-client-sdk';

const instance: App = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    name,
    description,
    endpointUrl,
    logoUrl,
    auth,
    version,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
