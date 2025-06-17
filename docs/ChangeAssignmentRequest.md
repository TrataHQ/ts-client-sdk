# ChangeAssignmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**ChangeAssignmentOperation**](ChangeAssignmentOperation.md) | Whether to assign or remove courses | [default to undefined]
**courses** | [**Courses**](Courses.md) |  | [default to undefined]
**customers** | [**Customers**](Customers.md) |  | [default to undefined]

## Example

```typescript
import { ChangeAssignmentRequest } from '@trata/ts-client-sdk';

const instance: ChangeAssignmentRequest = {
    operation,
    courses,
    customers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
