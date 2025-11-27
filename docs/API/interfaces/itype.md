---
id: "itype"
title: "IType"
sidebar_label: "IType"
---

[mobx-state-tree - v5.4.1](../index.md) › [IType](itype.md)

A type, either complex or simple.

## Type parameters

▪ **C**

▪ **S**

▪ **T**

## Hierarchy

- **IType**

  ↳ [IAnyType](ianytype.md)

  ↳ [ISimpleType](isimpletype.md)

  ↳ [IAnyComplexType](ianycomplextype.md)

  ↳ [ISnapshotProcessor](isnapshotprocessor.md)

  ↳ [IModelType](imodeltype.md)

## Index

### Properties

- [identifierAttribute](itype.md#optional-identifierattribute)
- [name](itype.md#name)

### Methods

- [create](itype.md#create)
- [describe](itype.md#describe)
- [is](itype.md#is)
- [validate](itype.md#validate)

## Properties

### `Optional` identifierAttribute

• **identifierAttribute**? : _undefined | string_

_Defined in [src/core/type/type.ts:89](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L89)_

Name of the identifier attribute or null if none.

---

### name

• **name**: _string_

_Defined in [src/core/type/type.ts:84](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L84)_

Friendly type name.

## Methods

### create

▸ **create**(`snapshot?`: [C](undefined), `env?`: any): _this["Type"]_

_Defined in [src/core/type/type.ts:96](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L96)_

Creates an instance for the type given an snapshot input.

**Parameters:**

| Name        | Type           |
| ----------- | -------------- |
| `snapshot?` | [C](undefined) |
| `env?`      | any            |

**Returns:** _this["Type"]_

An instance of that type.

---

### describe

▸ **describe**(): _string_

_Defined in [src/core/type/type.ts:118](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L118)_

Gets the textual representation of the type as a string.

**Returns:** _string_

---

### is

▸ **is**(`thing`: any): _thing is C | this["Type"]_

_Defined in [src/core/type/type.ts:104](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L104)_

Checks if a given snapshot / instance is of the given type.

**Parameters:**

| Name    | Type | Description                         |
| ------- | ---- | ----------------------------------- |
| `thing` | any  | Snapshot or instance to be checked. |

**Returns:** _thing is C | this["Type"]_

true if the value is of the current type, false otherwise.

---

### validate

▸ **validate**(`thing`: C, `context`: [IValidationContext](../index.md#ivalidationcontext)): _[IValidationResult](../index.md#ivalidationresult)_

_Defined in [src/core/type/type.ts:113](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L113)_

Run's the type's typechecker on the given value with the given validation context.

**Parameters:**

| Name      | Type                                                 | Description                                                                     |
| --------- | ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| `thing`   | C                                                    | Value to be checked, either a snapshot or an instance.                          |
| `context` | [IValidationContext](../index.md#ivalidationcontext) | Validation context, an array of { subpaths, subtypes } that should be validated |

**Returns:** _[IValidationResult](../index.md#ivalidationresult)_

The validation result, an array with the list of validation errors.
