# VirtualProspectOutput

Virtual prospect details for sparring

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**personaAttributes** | [**PersonaAttributesAndTraits**](PersonaAttributesAndTraits.md) |  | [default to undefined]
**additionalInfo** | **string** |  | [optional] [default to undefined]
**voice** | [**VoiceOutput**](VoiceOutput.md) |  | [optional] [default to undefined]
**context** | **string** |  | [optional] [default to undefined]
**virtualProspectType** | [**VirtualProspectTypeEnum**](VirtualProspectTypeEnum.md) |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { VirtualProspectOutput } from '@trata/ts-client-sdk';

const instance: VirtualProspectOutput = {
    id,
    orgId,
    name,
    description,
    personaAttributes,
    additionalInfo,
    voice,
    context,
    virtualProspectType,
    createdBy,
    createdAt,
    updatedBy,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
