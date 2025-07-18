# AgenticWorkflowDbModelsConnection

Connection represents an instance of an app with specific credentials and configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**name** | **string** | The name of the connection | [optional] [default to undefined]
**appId** | **string** | The unique identifier of the app | [optional] [default to undefined]
**appVersion** | **string** | The version of the app | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**credentials** | [**Credentials**](Credentials.md) |  | [default to undefined]
**connectionMetaData** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**id** | **string** | The unique identifier of the connection | [optional] [default to undefined]

## Example

```typescript
import { AgenticWorkflowDbModelsConnection } from '@trata/ts-client-sdk';

const instance: AgenticWorkflowDbModelsConnection = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    name,
    appId,
    appVersion,
    description,
    credentials,
    connectionMetaData,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
