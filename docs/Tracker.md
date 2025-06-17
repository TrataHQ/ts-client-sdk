# Tracker

Tracker represents a collection of keywords with name and description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**name** | **string** | The name of the tracker | [default to undefined]
**description** | **string** | The description of the tracker | [default to undefined]
**tracking_categories** | [**Array&lt;TrackingCategory&gt;**](TrackingCategory.md) | The list of tracking categories with their keywords | [default to undefined]
**status** | **string** | The status of the tracker | [optional] [default to 'active']
**id** | **string** | The unique identifier of the tracker | [optional] [default to undefined]

## Example

```typescript
import { Tracker } from '@trata/ts-client-sdk';

const instance: Tracker = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    name,
    description,
    tracking_categories,
    status,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
