# UserPerformanceSummaryRequest

Request model for user performance summary API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **string** | Start date for the analytics range | [default to undefined]
**endDate** | **string** | End date for the analytics range | [default to undefined]
**userIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**sortBy** | **string** | Column to sort by (userName, avgProcessAdherenceScore, avgSkillsScore, avgCommunicationScore, avgOverallScore) | [optional] [default to 'avgOverallScore']
**sortOrder** | **string** | Sort order - ascending or descending | [optional] [default to SortOrderEnum_Desc]
**skip** | **number** | Number of records to skip for pagination | [optional] [default to 0]
**limit** | **number** | Maximum number of records to return | [optional] [default to 50]

## Example

```typescript
import { UserPerformanceSummaryRequest } from '@trata/ts-client-sdk';

const instance: UserPerformanceSummaryRequest = {
    startDate,
    endDate,
    userIds,
    sortBy,
    sortOrder,
    skip,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
