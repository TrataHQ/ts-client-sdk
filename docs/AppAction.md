# AppAction

AppAction represents an action that can be performed by an app

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**actionType** | [**AppActionType**](AppActionType.md) | The type of the step, can be either trigger or action | [default to undefined]
**name** | **string** | The name of the step. This name should be unique within the app | [optional] [default to undefined]
**description** | **string** | The description of the step | [optional] [default to undefined]
**dataSchema** | **object** | JSON Schema for the step data | [default to undefined]
**uiSchema** | **object** | JSON Schema for the UI representation | [default to undefined]
**uiNodeType** | [**UiNodeType**](UiNodeType.md) | This represents how this action should be displayed in the UI | [default to undefined]
**appId** | **string** | The ID of the app that this action belongs to | [default to undefined]
**appVersion** | **string** | The version of the app that this action belongs to | [default to undefined]
**id** | **string** | The unique identifier of the app action | [optional] [default to undefined]

## Example

```typescript
import { AppAction } from '@trata/ts-client-sdk';

const instance: AppAction = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    actionType,
    name,
    description,
    dataSchema,
    uiSchema,
    uiNodeType,
    appId,
    appVersion,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
