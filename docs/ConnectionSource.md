# ConnectionSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceName** | **string** | Name of the source | [optional] [default to SourceNameEnum_Browser]
**sourceId** | **string** | Unique identifier for the source | [default to undefined]
**sourceProps** | **{ [key: string]: any; }** | Extra properties of source | [default to undefined]

## Example

```typescript
import { ConnectionSource } from '@trata/ts-client-sdk';

const instance: ConnectionSource = {
    sourceName,
    sourceId,
    sourceProps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
