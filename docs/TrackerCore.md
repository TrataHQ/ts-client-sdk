# TrackerCore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the tracker | [default to undefined]
**description** | **string** | The description of the tracker | [default to undefined]
**tracking_categories** | [**Array&lt;TrackingCategory&gt;**](TrackingCategory.md) | The list of tracking categories with their keywords | [default to undefined]
**status** | **string** | The status of the tracker | [optional] [default to 'active']

## Example

```typescript
import { TrackerCore } from '@trata/ts-client-sdk';

const instance: TrackerCore = {
    name,
    description,
    tracking_categories,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
