# EntityTag

Mapping table between entities and their tags (simple string tags)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**id** | **string** | The unique identifier of the entity tag | [optional] [default to undefined]
**entityType** | **string** | Type of entity being tagged (e.g., scenario, persona, course, evaluator) | [optional] [default to undefined]
**entityId** | **string** | ID of the entity being tagged | [optional] [default to undefined]
**tagName** | **string** | Name of the tag | [optional] [default to undefined]

## Example

```typescript
import { EntityTag } from '@trata/ts-client-sdk';

const instance: EntityTag = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    id,
    entityType,
    entityId,
    tagName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
