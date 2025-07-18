# AnalyticsModelOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_analytics** | [**SparrModelsAnalyticsConversationAnalyticsModel**](SparrModelsAnalyticsConversationAnalyticsModel.md) |  | [default to undefined]
**goals_analytics** | [**GoalAnalyticsModelOutput**](GoalAnalyticsModelOutput.md) |  | [default to undefined]
**coach_analytics** | [**CoachAnalyticsModel**](CoachAnalyticsModel.md) |  | [default to undefined]
**system_metrics** | [**SystemMetricsOutput**](SystemMetricsOutput.md) |  | [optional] [default to undefined]
**weighted_scores** | [**{ [key: string]: AnalyticsModelInputWeightedScoresValue; }**](AnalyticsModelInputWeightedScoresValue.md) |  | [optional] [default to undefined]
**tracker_analytics** | [**Array&lt;TrackerAnalyticsModel&gt;**](TrackerAnalyticsModel.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsModelOutput } from '@trata/ts-client-sdk';

const instance: AnalyticsModelOutput = {
    conversation_analytics,
    goals_analytics,
    coach_analytics,
    system_metrics,
    weighted_scores,
    tracker_analytics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
