# Endpoint

Endpoint for the action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | Action endpoint URL | [default to undefined]
**method** | **string** | Method to be used for invoking the endpoint | [optional] [default to MethodEnum_Post]
**headers** | **object** |  | [optional] [default to undefined]
**payload** | **object** |  | [optional] [default to undefined]
**module** | **string** | Module where the action is defined | [default to undefined]
**_function** | **string** | Function to be called inside the module | [default to undefined]
**workflowId** | **string** | Agentic workflow id | [default to undefined]

## Example

```typescript
import { Endpoint } from '@trata/ts-client-sdk';

const instance: Endpoint = {
    url,
    method,
    headers,
    payload,
    module,
    _function,
    workflowId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
