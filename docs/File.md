# ModelFile

FileUpload represents information about uploaded files in the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** | The user who created. | [optional] [default to undefined]
**createdAt** | **string** | The date and time it was created. | [optional] [default to undefined]
**updatedBy** | **string** | The user who last updated. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when it was last updated. | [optional] [default to undefined]
**orgId** | **string** | The workspace of the entity. | [optional] [default to undefined]
**filename** | **string** | The original name of the uploaded file | [default to undefined]
**file_url** | **string** | The signed storage URL where the file is stored. | [default to undefined]
**id** | **string** | The unique identifier of the file | [optional] [default to undefined]

## Example

```typescript
import { ModelFile } from '@trata/ts-client-sdk';

const instance: ModelFile = {
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
    orgId,
    filename,
    file_url,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
