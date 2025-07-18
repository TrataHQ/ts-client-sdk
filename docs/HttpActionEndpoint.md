# HttpActionEndpoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | Action endpoint URL | [default to undefined]
**method** | **string** | Method to be used for invoking the endpoint | [optional] [default to MethodEnum_Post]
**headers** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**payload** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { HttpActionEndpoint } from '@trata/ts-client-sdk';

const instance: HttpActionEndpoint = {
    url,
    method,
    headers,
    payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
