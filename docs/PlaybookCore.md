# PlaybookCore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the playbook | [default to undefined]
**description** | **string** | The description of the playbook | [default to undefined]
**steps** | [**Array&lt;Step&gt;**](Step.md) | The steps in the playbook | [default to undefined]
**status** | **string** | The status of the playbook | [optional] [default to 'active']

## Example

```typescript
import { PlaybookCore } from '@trata/ts-client-sdk';

const instance: PlaybookCore = {
    name,
    description,
    steps,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
