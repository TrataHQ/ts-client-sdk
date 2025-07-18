# VirtualProspectInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the virtual prospect | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**personaAttributes** | [**PersonaAttributesAndTraits**](PersonaAttributesAndTraits.md) |  | [default to undefined]
**additionalInfo** | **string** |  | [optional] [default to undefined]
**voice** | [**VoiceInput**](VoiceInput.md) |  | [optional] [default to undefined]
**virtualProspectType** | [**VirtualProspectTypeEnum**](VirtualProspectTypeEnum.md) |  | [optional] [default to undefined]
**context** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { VirtualProspectInput } from '@trata/ts-client-sdk';

const instance: VirtualProspectInput = {
    name,
    description,
    personaAttributes,
    additionalInfo,
    voice,
    virtualProspectType,
    context,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
