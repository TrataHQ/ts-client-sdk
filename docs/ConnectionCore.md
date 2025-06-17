# ConnectionCore

Core Connection Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the connection | [optional] [default to undefined]
**appId** | **string** | The unique identifier of the app | [optional] [default to undefined]
**appVersion** | **string** | The version of the app | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**credentials** | [**Credentials**](Credentials.md) |  | [default to undefined]
**connectionMetaData** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { ConnectionCore } from '@trata/ts-client-sdk';

const instance: ConnectionCore = {
    name,
    appId,
    appVersion,
    description,
    credentials,
    connectionMetaData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
