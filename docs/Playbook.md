# Playbook

Playbook represents a sequence of steps that can be followed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**name** | **string** | The name of the playbook | [default to undefined]
**description** | **string** | The description of the playbook | [default to undefined]
**steps** | [**Array&lt;Step&gt;**](Step.md) | The steps in the playbook | [default to undefined]
**status** | **string** | The status of the playbook | [optional] [default to 'active']
**id** | **string** | The unique identifier of the playbook | [optional] [default to undefined]

## Example

```typescript
import { Playbook } from '@trata/ts-client-sdk';

const instance: Playbook = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    name,
    description,
    steps,
    status,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
