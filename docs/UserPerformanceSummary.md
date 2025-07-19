# UserPerformanceSummary

Individual user performance summary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | User ID | [default to undefined]
**userProfilePictureUrl** | **string** |  | [optional] [default to undefined]
**userName** | **string** |  | [default to undefined]
**avgProcessAdherenceScore** | **number** |  | [default to undefined]
**avgSkillsScore** | **number** |  | [default to undefined]
**avgCommunicationScore** | **number** |  | [default to undefined]
**avgOverallScore** | **number** |  | [default to undefined]
**totalSessions** | **number** | Total number of sessions/analytics records | [default to undefined]

## Example

```typescript
import { UserPerformanceSummary } from '@trata/ts-client-sdk';

const instance: UserPerformanceSummary = {
    userId,
    userProfilePictureUrl,
    userName,
    avgProcessAdherenceScore,
    avgSkillsScore,
    avgCommunicationScore,
    avgOverallScore,
    totalSessions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
