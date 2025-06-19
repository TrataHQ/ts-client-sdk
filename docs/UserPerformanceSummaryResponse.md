# UserPerformanceSummaryResponse

Response model for user performance summary API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **string** | Start date of the analytics range | [default to undefined]
**endDate** | **string** | End date of the analytics range | [default to undefined]
**users** | [**Array&lt;UserPerformanceSummary&gt;**](UserPerformanceSummary.md) | List of user performance summaries | [default to undefined]
**totalCount** | **number** | Total number of users matching the criteria | [default to undefined]
**skip** | **number** | Number of records skipped | [default to undefined]
**limit** | **number** | Number of records requested | [default to undefined]
**sortBy** | **string** | Column used for sorting | [default to undefined]
**sortOrder** | **string** | Sort order applied | [default to undefined]

## Example

```typescript
import { UserPerformanceSummaryResponse } from '@trata/ts-client-sdk';

const instance: UserPerformanceSummaryResponse = {
    startDate,
    endDate,
    users,
    totalCount,
    skip,
    limit,
    sortBy,
    sortOrder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
