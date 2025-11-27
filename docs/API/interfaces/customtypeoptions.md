---
id: "customtypeoptions"
title: "CustomTypeOptions"
sidebar_label: "CustomTypeOptions"
---

[mobx-state-tree - v5.4.1](../index.md) › [CustomTypeOptions](customtypeoptions.md)

## Type parameters

▪ **S**

▪ **T**

## Hierarchy

- **CustomTypeOptions**

## Index

### Properties

- [name](customtypeoptions.md#name)

### Methods

- [fromSnapshot](customtypeoptions.md#fromsnapshot)
- [getValidationMessage](customtypeoptions.md#getvalidationmessage)
- [isTargetType](customtypeoptions.md#istargettype)
- [toSnapshot](customtypeoptions.md#tosnapshot)

## Properties

### name

• **name**: _string_

_Defined in [src/types/utility-types/custom.ts:15](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/utility-types/custom.ts#L15)_

Friendly name

## Methods

### fromSnapshot

▸ **fromSnapshot**(`snapshot`: S, `env?`: any): _T_

_Defined in [src/types/utility-types/custom.ts:17](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/utility-types/custom.ts#L17)_

given a serialized value and environment, how to turn it into the target type

**Parameters:**

| Name       | Type |
| ---------- | ---- |
| `snapshot` | S    |
| `env?`     | any  |

**Returns:** _T_

---

### getValidationMessage

▸ **getValidationMessage**(`snapshot`: S): _string_

_Defined in [src/types/utility-types/custom.ts:23](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/utility-types/custom.ts#L23)_

a non empty string is assumed to be a validation error

**Parameters:**

| Name       | Type |
| ---------- | ---- |
| `snapshot` | S    |

**Returns:** _string_

---

### isTargetType

▸ **isTargetType**(`value`: T | S): _boolean_

_Defined in [src/types/utility-types/custom.ts:21](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/utility-types/custom.ts#L21)_

if true, this is a converted value, if false, it's a snapshot

**Parameters:**

| Name    | Type       |
| ------- | ---------- |
| `value` | T &#124; S |

**Returns:** _boolean_

---

### toSnapshot

▸ **toSnapshot**(`value`: T): _S_

_Defined in [src/types/utility-types/custom.ts:19](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/utility-types/custom.ts#L19)_

return the serialization of the current value

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | T    |

**Returns:** _S_
