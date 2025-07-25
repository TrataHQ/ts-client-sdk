# AppActionEntity

App Action Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionType** | [**AppActionType**](AppActionType.md) |  | [default to undefined]
**name** | **string** | The name of the step. This name should be unique within the app | [optional] [default to undefined]
**description** | **string** | The description of the step | [optional] [default to undefined]
**dataSchema** | **{ [key: string]: any; }** | JSON Schema for the step data | [default to undefined]
**uiSchema** | **{ [key: string]: any; }** | JSON Schema for the UI representation | [default to undefined]
**uiNodeType** | [**UiNodeType**](UiNodeType.md) |  | [default to undefined]

## Example

```typescript
import { AppActionEntity } from '@trata/ts-client-sdk';

const instance: AppActionEntity = {
    actionType,
    name,
    description,
    dataSchema,
    uiSchema,
    uiNodeType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
