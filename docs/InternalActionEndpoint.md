# InternalActionEndpoint

Internal action endpoint to be used for calling the action inside the module. Not used by external users

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**module** | **string** | Module where the action is defined | [default to undefined]
**_function** | **string** | Function to be called inside the module | [default to undefined]

## Example

```typescript
import { InternalActionEndpoint } from '@trata/ts-client-sdk';

const instance: InternalActionEndpoint = {
    module,
    _function,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
